import React from 'react';
import MenuLateral from '../componentes/menuLateral';
import Titulo from '../componentes/titulo';

const Caja = () => {
    return (
        <div className='caja-template'>
            <MenuLateral mesasNaranja={[]} mesasRojas={[]}/>
            <div>
                <Titulo text='Caja' />
                <div className='salon-content'>
                    <div className='pedidos pendientes'>
                        <h1> Aqui puedes revisar las cuentas por cobrar</h1>
                    </div>
                    <div className='pedidos listos'></div>
                </div>
            </div>
        </div>
    )
}

export default Caja;