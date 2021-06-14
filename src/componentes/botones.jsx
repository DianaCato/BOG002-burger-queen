import './componentes.css';
import './buttonBurger.css';

export function ButtonPrimary(props) {
    return (
        <button className="btn-1">
            {props.text}
        </button >
    )
}

export function ButtonSecondary(props) {
    return (
        <button className="btn-2" onClick={() => props.setMenu(props.set)}>
            {props.text}
        </button>
    )
}

export function ButtonOrange(props) {
    return (
        <button className="btn-3 animation" onClick={() => {
            if (props.text.includes('Ham')) {
                props.setAdicionales(true)
            }
            props.agregarAlPedido(props.producto);
        }
        }>
            {props.text}
        </button>
    )
}

export function ButtonComanda(props) {
    return (
        <div id="buttonBurguer">
            <nav className="nav">
                <input type="checkbox" className="nav__cb" id="menu-cb" />
                <div className="nav__content">
                    <ul className="nav__items">
                        <li className="nav__item">
                            <span className="nav__item-text">
                                Home
                            </span>
                        </li>
                        <li className="nav__item">
                            <span className="nav__item-text">
                                Works
                            </span>
                        </li>
                        <li className="nav__item">
                            <span className="nav__item-text">
                                About
                            </span>
                        </li>
                        <li className="nav__item">
                            <span className="nav__item-text">
                                Contact
                            </span>
                        </li>
                    </ul>
                </div>
                <label className="nav__btn" htmlFor="menu-cb"></label>
            </nav>
        </div>
    )
}
