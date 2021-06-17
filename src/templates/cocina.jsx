import React from 'react';
import MenuLateral from '../componentes/menuLateral';
import Titulo from '../componentes/titulo';
import {useFirebaseApp} from 'reactfire';

const Cocina = () => {
    const firebase = useFirebaseApp();
    console.log(firebase)
    return(
        <div className='cocina-template'>
            <MenuLateral/>
            <div>
            <Titulo text='Cocina'/>
            <hr></hr>
            <div className='salon-content'>
                <div className='pedidos pendientes'>
                    <h1>Aquí podras ver la lista de pedidos pendientes</h1>
                </div>
                <div className='pedidos listos'></div>
            </div>
            </div>
        </div>
    )
}

export default Cocina;