import React, { useState } from 'react';
import { ButtonOrange, ButtonSecondary } from './botones';
import data from '../menu.json';
import Adicionales from './adicionales';

function Menu({ pedido, setPedido }) {
    const menuDesayuno = [Object.keys(data[0].breakfast), Object.values(data[0].breakfast)];
    const menuEspeciales = [Object.keys(data[0].lunch), Object.values(data[0].lunch)];
    const menuBebidas = [Object.keys(data[0].drinks), Object.values(data[0].drinks)];

    const [menu, setMenu] = useState(menuDesayuno);
    const [adicionales, setAdicionales] = useState(false);

    const agregarAlPedido = (producto) => {
        let nuevaOrden = [producto[0], producto[1].price, 1];
        let agregar = [...pedido];
        const encontrarIndex = elemento => elemento[0] === producto[0];
        const index = agregar.findIndex(encontrarIndex);
        index >= 0 ?
            agregar[index] = [agregar[index][0],
            agregar[index][1] + (agregar[index][1] / agregar[index][2]),
            agregar[index][2] + 1]
            : agregar.push(nuevaOrden);

        setPedido(agregar)
    }

    return (
        <div>
            <nav>
                <ButtonSecondary text='Desayuno' setMenu={setMenu} set={menuDesayuno} />
                <ButtonSecondary text='Especiales' setMenu={setMenu} set={menuEspeciales} />
                <ButtonSecondary text='Bebidas' setMenu={setMenu} set={menuBebidas} />
            </nav>
            <>
                <ul>
                    {!adicionales ? ''
                        : <Adicionales setAdicionales={setAdicionales}
                            agregarAlPedido={agregarAlPedido}
                            pedido={pedido}
                        />}
                    {menu[0].map((producto, index) => (
                        producto.includes('Ham') ?
                            <li key={producto}><ButtonOrange
                                text={`${producto}  $${menu[1][index].price}.00`}
                                setAdicionales={setAdicionales}
                                agregarAlPedido={agregarAlPedido}
                                producto={[menu[0][index], menu[1][index]]} />
                            </li>
                            : <li key={producto}><ButtonOrange
                                text={`${producto}   $${menu[1][index].price}.00`}
                                agregarAlPedido={agregarAlPedido}
                                producto={[menu[0][index], menu[1][index]]}
                            /></li>
                    ))}

                </ul>
            </>
        </div>
    );

}

export default Menu;