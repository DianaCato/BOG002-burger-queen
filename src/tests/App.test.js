import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import WebApp from '../webApp'
import {
  FirebaseAppProvider
} from 'reactfire';
import firebaseConfig from '../firebaseConfig';

afterEach(cleanup);

describe('WebApp', () => {
  test('render buttons in template Inicio', () => {
    render(<WebApp />);
    const buttonSalon = screen.getByText(/Salón/i);
    const buttonCocina = screen.getByText(/Cocina/i);
    const buttonCaja = screen.getByText(/Caja/i);
    expect(buttonSalon).toBeInTheDocument();
    expect(buttonCocina).toBeInTheDocument();
    expect(buttonCaja).toBeInTheDocument();
  });

  test('change template before of the click', () => {
    const { getByText } = render(
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        < WebApp />
      </FirebaseAppProvider>)
    fireEvent.click(getByText('Salón'))
    const template = document.querySelector('.salon-template')
    expect(template).toBeInTheDocument();
  })

  test('In Salon template exist menuLateral, factura and menu', () => {
    const { getByText } = render(
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        < WebApp />
      </FirebaseAppProvider>)
    fireEvent.click(getByText('Salón'))
    const menuLateral = document.querySelector('.menuLateral')
    const factura = document.querySelector('.factura')
    const menu = document.querySelector('.menu')
    expect(menuLateral).toBeInTheDocument();
    expect(factura).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
  })

})
