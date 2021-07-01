import React from 'react';

export default function EstadoMesas ({mesasNaranja, mesasRojas, preparar}){
    
   
    return (
        <div>
        <ul>
            {mesasNaranja.map((orden, index) =>
                 <li key={index} className='mesaNaranja' onClick={()=>preparar(orden)}> Mesa {orden[0].mesa}</li>
            )}
            {mesasRojas.map((orden, index) =>
                 <li key={index}className='mesaRoja'> Mesa  {orden[0].mesa}</li>
            )}
        </ul>
    </div>
    )
}
    
