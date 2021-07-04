import React from 'react';
import { useFirestore } from 'reactfire';
// import firebase from 'firebase/firestore';
import { ButtonKitchen } from '../botones/botones';
import Cronometro from './cronometro';

export default function OrdenesPreparacion(props) {

    const change = document.querySelector('.listo')
    if (change) {
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
                lista: pedido.lista,
                cliente: pedido.cliente,
                mesa: pedido.mesa,
                date: Date.now(),
            });
    }

    const eliminarOrden = (orden) => {
        db.collection("pedidos").doc(orden).delete();
    }

    return (
        <div className='ordenPendiente'>
            <div className='ordenCocina'>
                <div className='datos-cocina'>
                    <h3>Nombre : {props.data[0].cliente}</h3>
                    <h3>Mesa: {props.data[0].mesa}</h3>
                </div>
                <div className='list-cocina'>
                    <ul className='orden-preparacion'>
                        <li className={'li-orden'}>
                            <div className='span-cocina'>Cant.</div>
                            <div className='span-cocina'>Producto</div>
                        </li>
                        {props.data[0].lista.map((item, index) => (
                            <li className='li-orden' key={index}>
                                <div>{item.split(',')[2]}</div>
                                <div onClick={handleTextClick}>
                                    {item.split(',')[0]}
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className='footKitchen'>
                    <Cronometro wait={props.data[0]} />
                    <ButtonKitchen
                        iniciar={false}
                        data={props.data[0]}
                        dataId={props.data[1]}
                        almacenarPedido={almacenarPedido}
                        eliminarOrden={eliminarOrden}
                    />
                </div>
            </div>
        </div>
    )
}