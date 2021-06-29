import React from 'react';
import '../componentes.css';

export function InputBurger() {
    return (
        <svg viewBox="6.5 14 17 10" >

            <path fill="none" strokeWidth="4%"
                d="M 8,24 A 7 4 2 0 0 10,27  h 10 A 7 4 2 0 0 22,24z
           A 0.5 0.5 45 1 1 8,22.5 h 14 A 0.5 0.5 45 1 1 22,24
           M 22,22.5 v -3 h -14 v 3  M 7.5,19.5 A 4.5 7 90 0 1 22.5,19.5z
           M 10,18.5 L 10.8,17.5 M 12.8,17.2 L 13.5,16.2
           M 14.5,18.5 L 15.3,17.5 M 17.2,17.2 L 17.9,16.2
           M 19.5,17.5 L 18.8,18.4 M 7,21 A 3 6 15 0 1 9,21 
           A 3 6 15 0 0 11,21 A 3 6 15 0 1 13,21 A 3 6 15 0 0 15,21 
           A 3 6 15 0 1 17,21 A 3 6 15 0 0 19,21 A 3 6 15 0 1 21,21 
           A 3 6 15 0 0 23,21" />

        </svg>
    )

}

export function InputDelete(props) {
    const EliminarProductoEnPedido = (producto) => {
        let actualizarPedido = [...props.pedido];
        const encontrarIndex = elemento => elemento[0] === producto;
        const index = actualizarPedido.findIndex(encontrarIndex);
        
        actualizarPedido.splice(index, 1);

        props.setPedido(actualizarPedido)
    }

    return (
        <button onClick={()=>{EliminarProductoEnPedido(props.producto)}}>
        <svg viewBox="125 29 50 100" width="100" height="100">
            <path fill="none" stroke="#900404" strokeWidth="8"
                d="M 120,60  h60  l -10,50 h-40 z
                   M 115,50 h70 M 145,50 v-10 h10 v10
                   M 140,70 l 4,30 M 160,70 l-4,30"
            />
        </svg>
        </button>
    )
}

export function InputAdd(props) {
    const AgregarProductoEnPedido = (producto) => {
        let actualizarPedido = [...props.pedido];
        const encontrarIndex = elemento => elemento[0] === producto;
        const index = actualizarPedido.findIndex(encontrarIndex);
    
        actualizarPedido[index][1] += actualizarPedido[index][1] / actualizarPedido[index][2];
        actualizarPedido[index][2]+=1;

        props.setPedido(actualizarPedido)
    }
    return (
        <button onClick={()=>{AgregarProductoEnPedido(props.producto)}}>
        <svg viewBox="0 50 60 50" width="100" height="100">
            <line x1="25" x2="25" y1="50" y2="100" stroke="#900404" strokeWidth="7" />
            <line x1="0" x2="50" y1="75" y2="75" stroke="#900404" strokeWidth="7" />
        </svg>
        </button>
    )

}

export function InputRemove(props) {
    const removerProductoEnPedido = (producto) => {
        let actualizarPedido = [...props.pedido];
        const encontrarIndex = elemento => elemento[0] === producto;
        const index = actualizarPedido.findIndex(encontrarIndex);
    
        actualizarPedido[index][1] -= actualizarPedido[index][1] / actualizarPedido[index][2];
        actualizarPedido[index][2]-=1;

        if (actualizarPedido[index][2] === 0 ){
            actualizarPedido.splice(index, 1) 
        }

        props.setPedido(actualizarPedido)
    }
    return (
        <button onClick={()=>{removerProductoEnPedido(props.producto)}}>
        <svg viewBox="0 50 50 50" width="100" height="100">
        <line x1="0" x2="43" y1="75" y2="75" stroke="#900404" strokeWidth="7" />
    </svg>
    </button>
    )

}

export function InputMenu() {
    return(
        <svg viewBox="0 50 50 30" width="100" height="100">
            <line x1="10" x2="40" y1="75" y2="75" stroke="#900404" strokeWidth="4" />
            <line x1="10" x2="40" y1="65" y2="65" stroke="#900404" strokeWidth="4" />
            <line x1="10" x2="40" y1="55" y2="55" stroke="#900404" strokeWidth="4" />
        </svg>
    )
}