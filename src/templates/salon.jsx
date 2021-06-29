import React, {useState} from 'react';
import Comanda from '../componentes/salon/comanda';
import Menu from '../componentes/salon/menu';
import MenuLateral from '../componentes/menuLateral';
import Titulo from '../componentes/titulo';

const Salon = () => {
    const [pedido, setPedido] = useState([]);
    return(
        <div className='salon-template'>
            <MenuLateral/>
            <div>
            <Titulo text='Salón'/>
            <div className='salon-content'>
                <div className='factura'>
                    <Comanda pedido={pedido} setPedido={setPedido}/>
                </div>
                <div className='menu'>
                <Menu pedido={pedido} setPedido={setPedido}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Salon;