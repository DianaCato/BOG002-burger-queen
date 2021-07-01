import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    FirebaseAppProvider
} from 'reactfire';
import firebaseConfig from '../firebaseConfig';

import Salon from '../templates/salon';
import Menu from '../componentes/salon/menu';

afterEach(cleanup);

describe('Functions in menu of Salon template', () => {
    test('the menu component renders drinks category', () => {
        const { getByText } = render(< Menu />);
        fireEvent.click(getByText('Bebidas'))
        const drink = screen.getByText(/Limonada natural/i);
        expect(drink).toBeInTheDocument();
    })
    test('Add product in the comanda', () => {
        const { getByText } = render(
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <Router>
                    <Salon />
                </Router>
            </FirebaseAppProvider>);
        fireEvent.click(getByText(/jugo/i))
        const addNewProduct = document.querySelector('li .spam-1');
        expect(addNewProduct).toBeInTheDocument();
    })
    test('The total of the order is the sum of the products', () => {
        const { getByText } = render(
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <Router>
                    <Salon />
                </Router>
            </FirebaseAppProvider>);
        fireEvent.click(getByText(/jugo/i))
        fireEvent.click(getByText(/Sandwich/i))
        const total = screen.getByText(/17/)
        expect(total).toBeInTheDocument();
    })
})
