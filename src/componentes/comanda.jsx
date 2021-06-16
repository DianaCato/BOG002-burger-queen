import React from 'react';
import { ButtonComanda} from './botones';

export default function Comanda({ pedido, setPedido }) {

    let total = 0;

    pedido.map(producto => (
        total += producto[1]
    ))
  
    return (
        <div className='comanda'>
            <div className='datos'>
                <label> Nombre </label>
                <input type="text" name="cliente" className='cliente' />
                <label>   Mesa </label>
                <input type="number" name="cliente" className='mesas' />
            </div>
            <div className='orden'>
                <ul>
                    <li>Cant. Producto Valor  </li>
                    {pedido.map((producto, index) => (
                        <li key={index} className='pedidos'>
                            <span className='spam-1'> {producto[2]} </span>
                            <span className='spam-2'> {producto[0]} </span>
                            <span className='spam-3'>{producto[1]}.00</span>
                            <ButtonComanda producto={producto[0]} pedido={pedido} setPedido={setPedido}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className='total'> Total : $ {total}.00 </div>
            <button className='btn-2' onClick={() =>{setPedido([])}}>Cancelar</button> 
            <button className='btn-2'>Ordenar</button> 
        </div>
    )

}

