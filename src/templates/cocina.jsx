import React, { useState, useEffect } from 'react';
import MenuLateral from '../componentes/menuLateral';
import Titulo from '../componentes/titulo';
import { useFirestore } from 'reactfire';
import OrdenesPreparacion from '../componentes/cocina/ordenPreparacion';
import './cocina.css';
import chef from '../img/chef.png'

const Cocina = () => {
    const [order, setOrder] = useState([]);

    const db = useFirestore(); 

    useEffect(() => {
        
      db.collection('pedidos')
        .orderBy('date')
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
   
    const [preparar, setPreparar] = useState([]);
    

    const iniciarPreparacion = (orden) =>{
        const preparando = [...preparar];
    preparando.push(orden)    
        setPreparar(preparando)    
    }
   
    return(
        <div className='cocina-template'>
            <MenuLateral mesasNaranja={order} mesasRojas={preparar} handleClick={iniciarPreparacion}/>
            <div>
            <Titulo text='Cocina'/>
            <div className='cocina-content'>
                <div>{ preparar.length === 0 ?
                  <img className='logoMenu' src={chef} alt='logo-hambrurguer' />
        : '' }</div>
                {preparar.map((orden, index) =>(
                <OrdenesPreparacion key={index} data={orden} index= {index} preparar={preparar} setPreparar={setPreparar}/>    
                ))
                }
            </div>
            </div>
        </div>
    )
}

export default Cocina;