import React, { useState } from 'react';
import { InputDelete, InputAdd, InputRemove, InputMenu } from './inputBurger';
import '../componentes.css';
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
    const [content, setContent] = useState(false);
    

    return (
        <div className="button-comanda">
            {content ? <div className="active-options">
                <div
                    onClick={() => {
                        setContent(false)
                    }}> X </div>
                <div className="options">
                    <InputAdd producto={props.producto} pedido={props.pedido} setPedido={props.setPedido}/>
                    <InputRemove producto={props.producto} pedido={props.pedido} setPedido={props.setPedido}/>
                    <InputDelete producto={props.producto} pedido={props.pedido} setPedido={props.setPedido}/>
                </div>
            </div>
                : <button className="button-change" onClick={() => {
                    setContent(true)
                }}> <InputMenu/></button>}


        </div>
    )
}
