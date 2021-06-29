import React from 'react';

export default function OrdenesPendientes(props) {
    const listaOrdenes = props.data

    return (
        <div className='ordenPendiente'>
            <h1>Nuevas ordenes : {listaOrdenes.length}</h1>
            <div className="ordenesEntrantes">
                <ul>
                    {
                        listaOrdenes.map((orden, index) =>
                            <li className='list-orden' key={index}>
                                <button
                                    className='btn-list' onClick={() =>
                                        props.setPreparar(orden)}>Mesa : {orden.mesa}
                                </button>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}