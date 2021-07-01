import { Link } from 'react-router-dom';
import './componentes.css';
import logoBurger from '../img/logo.png'
import EstadoMesas from './estadoMesas';

export default function MenuLateral(props) {


    return (
        <div className='menuLateral'>
            <Link to='/'>
            <img className='logoMenu' src={logoBurger} alt='logo-hambrurguer' />
            </Link>
            <div>
                <EstadoMesas mesasNaranja={props.mesasNaranja} mesasRojas={props.mesasRojas} preparar={props.preparar}/>
            </div>
        </div>

    )
}