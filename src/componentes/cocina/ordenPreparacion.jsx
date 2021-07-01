import React from 'react';
import { useFirestore } from 'reactfire';
// import firebase from 'firebase/firestore';

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

const almacenarPedido = (pedido) => {

db.collection('orden-lista')
    .doc().set({
        lista : pedido.lista,
        cliente: pedido.cliente,
        mesa: pedido.mesa,
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
                <button className='btn-2' onClick={() => {
                        almacenarPedido(props.data[0])
                        eliminarOrden(props.data[1])
                    }}>HECHO</button>
            </div>
        </div>
    )
}