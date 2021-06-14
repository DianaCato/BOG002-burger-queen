import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
    } from 'react-router-dom';
import Inicio from './templates/inicio';
import Salon from './templates/salon';
import Cocina from './templates/cocina';
import Caja from './templates/caja';
import RutaInvalida from './templates/RutaInvalida'

export default function WebApp() {
return (
    <Router>
        <Switch>
            <Route path='/' exact  component={Inicio}/>
            <Route path='/salon' component={Salon}/>
            <Route path='/cocina' component={Cocina}/>
            <Route path='/caja' component={Caja}/>
            <Route component={RutaInvalida}/>
        </Switch>
    </Router>
)
} 
