import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirstApp} from './/FirstApp';
import {CounterApp} from './/CounterApp';
import styles from './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola,Soy Vegeta" />
    </React.StrictMode>
)