import React, { useState } from 'react';
import { useFirestore } from 'reactfire';
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/firestore';
import { ButtonComanda } from './botones';

export default function Comanda({ pedido, setPedido }) {
    const cliente= {};
    const [datos, setDatos] = useState(cliente);
    
    const registrarCliente = (e) =>{
        cliente.nombre = e.target.value
        setDatos(cliente)
    }  

    const registrarMesa = (e) =>{
        cliente.mesa = e.target.value
        setDatos(cliente)
    }  

    let total = 0;

    pedido.map(producto => (
        total += producto[1]
    ))

    const db = useFirestore();

    const almacenarPedido = (pedido, cliente, mesa) => {
        const lista = pedido.map(producto => producto.join(','))
        db.collection('pedidos')
            .doc().set({ 
                lista,
                cliente,
                mesa
             });
    }

    return (
        <div className='comanda'>
            <form className='datos'>
                <label> Nombre </label>
                <input type="text"  onChange={registrarCliente} className='cliente' />
                <label>   Mesa </label>
                <input type="number" onChange={registrarMesa} className='mesas' />
            </form>
            <div className='orden'>
                <ul>
                    <li>Cant. Producto Valor  </li>
                    {pedido.map((producto, index) => (
                        <li key={index} className='pedidos'>
                            <span className='spam-1'> {producto[2]} </span>
                            <span className='spam-2'> {producto[0]} </span>
                            <span className='spam-3'>{producto[1]}.00</span>
                            <ButtonComanda producto={producto[0]} pedido={pedido} setPedido={setPedido} />
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className='total'> Total : $ {total}.00 </div>
            <div className='btn-comanda'>
                <button className='btn-2' onClick={() => {
                    if (window.confirm('Presiona Aceptar para eliminar el pedido')) {
                        setPedido([])
                    }
                }}>Cancelar</button>

                <button className='btn-2' onClick={() => {
                    almacenarPedido(pedido, datos.nombre, datos.mesa)
                    setPedido([])
                }}>Enviar</button>
            </div>
        </div>
    )

}

