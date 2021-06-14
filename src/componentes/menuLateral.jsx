import { Link } from 'react-router-dom';
import './componentes.css';
import logoBurger from '../img/logo.png'

export default function MenuLateral() {
    return (
        <div className='menuLateral'>
            <Link to='/'>
            <img className='logoMenu' src={logoBurger} alt='logo-hambrurguer' />
            </Link>
            
        </div>
    )
}