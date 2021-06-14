import React from 'react';
import error404 from '../img/error-404.gif';

const RutaInvalida = () => {
    return (
        <div className='error-template'>
            <img src={error404} alt='logo-hambrurguer' />
            <div>
                <p>Ruta no encontrada
                <a href='/'>(ir a inicio)</a></p>
            </div>
        </div>
    )
}

export default RutaInvalida;