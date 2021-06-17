import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebApp from './webApp.js'
import {
FirebaseAppProvider
} from 'reactfire';
import firebaseConfig from './firebaseConfig';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
 <React.StrictMode>
    <WebApp />
  </React.StrictMode>
  </FirebaseAppProvider>,
 
  document.getElementById('root')
);
