import React from 'react';
import './componentes.css';
import { InputBurger } from './inputBurger';

export default function Adicionales(props) {
    
    const agregarAdicionales= (tipo,adicional)=> {
        if(!tipo){
            alert("Selecciona el tipo de hamburguesa")
        }
     let agregarHamburguesa = props.pedido.pop();
     agregarHamburguesa[1] = {price:agregarHamburguesa[1]}
     agregarHamburguesa[0] = agregarHamburguesa[0] +  tipo ;
     if(adicional){
         agregarHamburguesa[0] = agregarHamburguesa[0] + ' + ' + adicional;
         adicional.includes('y')?  agregarHamburguesa[1].price+= 2 
         : agregarHamburguesa[1].price+= 1 
     }
         props.agregarAlPedido(agregarHamburguesa)
     }
    const getRadioButtonSelectedValue = (ctrl) => 
{
    const check = [];
    for(let i=0;i<ctrl.length;i++){
        if(ctrl[i].checked) 
        check.push(ctrl[i].value)}
     return check.join(' y ') 
}
    const detenerSubmit = e => {
        e.preventDefault();
        props.setAdicionales(false)
        agregarAdicionales(
            getRadioButtonSelectedValue(document.formularioAdicionales.tipoHamburguesa),
            getRadioButtonSelectedValue(document.formularioAdicionales.adicional))   
    }
   
    return (
        <form onSubmit={detenerSubmit} className='adicional' name='formularioAdicionales'>
            <p><input type="button" value="X" className='salir' onClick={() => props.setAdicionales(false)} /></p>
            <label><input type="radio" name="tipoHamburguesa" value=" de res"/><InputBurger /><span>Res</span></label> <br />
            <label><input type="radio" name="tipoHamburguesa" value=" de pollo" /> <InputBurger /> <span>Pollo</span> </label> <br />
            <label><input type="radio" name="tipoHamburguesa" value=" vegetariana" /> <InputBurger /> <span>Vegetariana</span> </label> <br />
            <p>*******************************</p>
            <p>Adicionales</p>
            <label><input type="checkbox" name="adicional" value="Huevo" /> Huevo ($ 1) </label> <br />
            <label><input type="checkbox" name="adicional" value="Queso" /> Queso ($ 1) </label> <br />
            <p><input type="submit" className="btn-2" value="Enviar" /></p>
         
        </form>
        
    )
}