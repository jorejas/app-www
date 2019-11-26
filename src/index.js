import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import puerto from './img/puerto.jpg';

ReactDOM.render(
    <div class="flex flex-col items-center font-sans font-light">
        <nav class="flex items-center justify-between rounded-lg h-16 bg-gray-600 mt-2 mx-auto w-4/5">
            <h1 class="text-2xl font-semibold text-white mx-2">Monumentos de Oviedo</h1>
            <button class="bg-midnightblue hover:bg-blue-700 text-white font-bold py-2 px-4 h-12 rounded-lg mx-2">
                ≡
            </button>
        </nav>
            <div class="w-4/5 rounded-lg my-4 overflow-hidden shadow mx-auto hover:shadow-xl">
                <img class="w-full" src={puerto} alt="Sunset in the mountains"></img>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mar</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer my-1 mx-1">Ports Routes</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer my-1 mx-1">Sea</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer my-1 mx-1">Another Example</span>

                </div>
            </div>
            <div class="w-4/5 rounded-lg my-4 overflow-hidden shadow mx-auto hover:shadow-xl">
                <img class="w-full" src={puerto} alt="Sunset in the mountains"></img>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Puerto</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer my-1 mx-1">Ports Routes</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer my-1 mx-1">Sea</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer my-1 mx-1">Another Example</span>

                </div>
            </div>
            <div class="w-4/5 rounded-lg my-4 overflow-hidden shadow mx-auto hover:shadow-xl">
                <img class="w-full" src={puerto} alt="Sunset in the mountains"></img>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Faro</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer my-1 mx-1">Ports Routes</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer my-1 mx-1">Sea</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer my-1 mx-1">Another Example</span>

                </div>
            </div> 
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
