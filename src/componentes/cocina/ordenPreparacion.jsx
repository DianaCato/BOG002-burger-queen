import React from 'react';
// import { useFirestore } from 'reactfire';
// import firebase from 'firebase/firestore';

export default function OrdenesPreparacion(props) {

console.log(props.data) 

    return (
        <div className='ordenPendiente'>
            <h1>Orden en preparación</h1>
            <div className='ordenCocina'>
                <div>
                    <h3>Nombre : {props.data.cliente}</h3>
                    <h3>Mesa: {props.data.mesa}</h3>
                </div>
                <ul className='orden-preparacion'>
                   {props.data.lista.map((item, index)=>(
                      <li className='list-orden' key={index}>
                          <span>{item.split(',')[2]}</span>
                          <span>{item.split(',')[0]}</span>
                  </li>  
                   ) 
                   )} 
                </ul>
               <hr></hr>

            </div>
        </div>
    )
}