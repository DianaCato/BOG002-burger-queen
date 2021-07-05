
export default function EstadoMesas ({mesasNaranja, mesasRojas, handleClick} ){
     
    return (
        <div>
        <ul>
            {mesasNaranja.map((orden, index) =>
                 <li key={index} className='mesaNaranja' onClick={()=>handleClick(orden)}> Mesa {orden[0].mesa}
                 </li>
            )}
            {mesasRojas.map((orden, index) =>
                 <li key={index}className='mesaRoja'> Mesa  {orden[0].mesa}</li>
            )}
        </ul>
    </div>
    )
}
    
