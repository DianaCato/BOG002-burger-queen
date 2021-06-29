import React, { useState, useEffect } from 'react';
import MenuLateral from '../componentes/menuLateral';
import Titulo from '../componentes/titulo';
import { useFirestore } from 'reactfire';
import OrdenesPendientes from '../componentes/cocina/ordenesPendientes';
import OrdenesPreparacion from '../componentes/cocina/ordenPreparacion';
import './cocina.css';

const Cocina = () => {
    const [order, setOrder] = useState([]);

    const db = useFirestore(); 

    useEffect(() => {
        
      db.collection('pedidos')
        .orderBy('date')
        .onSnapshot((querySnapshot) => {
          const arrayData = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            arrayData.push({ ...data })
          })
          setOrder(arrayData);
        })
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const cliente = {
        cliente: '',
        date: '',
        lista: [],
        mesa:''        
    }
    const [preparar, setPreparar] = useState(cliente);

    return(
        <div className='cocina-template'>
            <MenuLateral/>
            <div>
            <Titulo text='Cocina'/>
            <div className='cocina-content'>
                <OrdenesPendientes data={order} setPreparar={setPreparar}/>
                <OrdenesPreparacion data={preparar}/>
            </div>
            </div>
        </div>
    )
}

export default Cocina;