import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import puerto from './img/puerto.jpg'

console.log(puerto);

ReactDOM.render(
<div>
    <div class="header">
        <h1 class="place">Puerto de Luanco</h1>
        <button class="menu">
            ≡
        </button>
    </div>
    <img class="img" src={puerto} alt="Puerto"/>
    <table class="facts">
        <tr>
            <td>Fecha de construccion:</td>
            <td>S.XVI</td>
        </tr>
        <tr>
            <td>Fecha de construccion:</td>
            <td>S.XVI</td>
        </tr>
        <tr>
            <td>Fecha de construccion:</td>
            <td>S.XVI</td>
        </tr>
    </table>
    <p class="info">El puerto de Luanco es un puerto deportivo y pesquero en la localidad Gozoniega de Luanco en Asturias, este puerto antiguamente se trataba de un puerto ballenero pero en la actualidad su principal uso es el deportivo y pesquero, ademas de la escuela de Luanco</p>
</div>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
