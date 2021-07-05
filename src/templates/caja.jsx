import React, { useState, useEffect } from 'react';
import { useFirestore } from 'reactfire';
import Factura from '../componentes/caja/factura';
import Historico from '../componentes/caja/historico';
import MenuLateral from '../componentes/menuLateral';
import Titulo from '../componentes/titulo';
import './caja.css';

const Caja = () => {
    const [order, setOrder] = useState([]);
    const [factura, setFactura] = useState([]);

    const db = useFirestore(); 

    useEffect(() => {
        
      db.collection('caja')
        .orderBy('time')
        .onSnapshot((querySnapshot) => {
          const arrayData = []
          querySnapshot.forEach((doc) => {
            const data = [doc.data(), doc.id]
            arrayData.push({ ...data })
          })
          setOrder(arrayData);
        })
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const facturar = (orden) =>{
        let facturar = [];
    facturar.push(orden)    
        setFactura(facturar)    
    }
    
    return (
        <div className='caja-template'>
            <MenuLateral mesasNaranja={order} mesasRojas={[]} handleClick={facturar}/>
            <div>
                <Titulo text='Caja' />
                <div className='salon-content'>
                    <div className='pedidos pendientes'>
                        <Historico/>
                        <Factura factura={factura} setFactura={setFactura}/>
                    </div>
                    <div className='pedidos listos'></div>
                </div>
            </div>
        </div>
    )
}

export default Caja;