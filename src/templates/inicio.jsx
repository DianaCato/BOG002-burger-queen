import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoBurger from '../img/logo.png'
import { ButtonPrimary } from '../componentes/botones/botones'
import './templates.css'

class Inicio extends Component {
    render() {
        return (
            <div className='fondo-inicio'>
                <div className='inicio'>
                    <img className='logoBurger' src={logoBurger} alt='logo-hambrurguer' />
                    <Link to='/salon'>
                        <ButtonPrimary text='Salón' />
                    </Link>
                    <Link to='/cocina'>
                        <ButtonPrimary text='Cocina' />
                    </Link>
                    <Link to='/caja'>
                        <ButtonPrimary text='Caja' />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Inicio;