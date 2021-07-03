import React, {useState, useEffect} from 'react';
import Comanda from '../componentes/salon/comanda';
import Menu from '../componentes/salon/menu';
import { useFirestore } from 'reactfire';
import MenuLateral from '../componentes/menuLateral';
import Titulo from '../componentes/titulo';

const Salon = () => {
    const [pedido, setPedido] = useState([]);
    const [ordenesActivas, setOrdenesActivas] = useState([]);
    const [ordeneslistas, setOrdenesListas] = useState([]);
    
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
          setOrdenesActivas(arrayData);
        })
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        
        db.collection('orden-lista')
          .orderBy('date')
          .onSnapshot((querySnapshot) => {
            const arrayData = []
            querySnapshot.forEach((doc) => {
              const data = [doc.data(), doc.id]
              arrayData.push({ ...data })
            })
            setOrdenesListas(arrayData);
          })
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      const entregarPedido = () =>{
        alert('¿ Has completado la entrega?')    
    }


    return(
        <div className='salon-template'>
            <MenuLateral mesasNaranja={ordeneslistas} mesasRojas={ordenesActivas} handleClick={entregarPedido}/>
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