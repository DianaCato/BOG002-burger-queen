import React from 'react';
import { useFirestore } from 'reactfire';
// import firebase from 'firebase/firestore';
import { ButtonKitchen } from '../botones/botones';

export default function OrdenesPreparacion(props) {

     const change = document.querySelector('.listo')
     if(change){
        change.className = ''
     }  

const handleTextClick = e => {
    e.target.className === 'listo' ?
    e.target.className = '' : e.target.className = 'listo'
}


const db = useFirestore();

const eliminarFicha = () => {

    let actualizarFichas = [...props.preparar];
     const index = props.index;
     actualizarFichas.splice(index, 1);
     props.setPreparar(actualizarFichas)
 }

const almacenarPedido = (pedido) => {
    eliminarFicha();
    db.collection('orden-lista')
    .doc().set({
        lista : pedido.lista,
        cliente: pedido.cliente,
        mesa: pedido.mesa,
        date: new Date(),
    });
}

const eliminarOrden = (orden) =>{
    db.collection("pedidos").doc(orden).delete();
}

    return (
        <div className='ordenPendiente'>
            <h1>Orden en preparación</h1>
            <div className='ordenCocina'>
                <div>
                    <h3>Nombre : {props.data[0].cliente}</h3>
                    <h3>Mesa: {props.data[0].mesa}</h3>
                </div>
                <ul className='orden-preparacion'>
                    {props.data[0].lista.map((item, index) => (
                        <li className='list-orden' key={index}>
                            <span>{item.split(',')[2]}</span>
                            <span onClick={handleTextClick}  >{item.split(',')[0]}
                            </span>
                        </li>
                    )
                    )}
                </ul>
                <hr></hr>
                <span className='time'>Tiempo : 00 : 00 :00</span>
                <ButtonKitchen 
                    iniciar={false}
                    data={props.data[0]} 
                    dataId={props.data[1]} 
                    almacenarPedido={almacenarPedido} 
                    eliminarOrden={eliminarOrden}                     
                />
            </div>
        </div>
    )
}