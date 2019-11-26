import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import puerto from './img/puerto.jpg';

ReactDOM.render(
    <div class="flex flex-col bg-gray-100 items-center font-sans font-light">
        <nav class="flex items-center w-4/5 my-4 justify-between rounded-lg flex-wrap bg-oviedoblue p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Historia de Oviedo</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items- lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <a href="#guerra-civil" class="block mt-4 lg:inline-block lg:mt-0 text-white font-normal hover:text-white mr-4">
                    Guerra Civil
                </a>
                <a href="#Prerromanico" class="block mt-4 lg:inline-block lg:mt-0 text-white font-normal hover:text-white mr-4">
                    Prerrománico
                </a>
                <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-white font-normal hover:text-white">
                    About
                </a>
                </div>
            </div>
        </nav>
            <div class="w-4/5 rounded-lg bg-white my-4 overflow-hidden shadow mx-auto hover:shadow-xl">
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
            <div class="w-4/5 rounded-lg bg-white my-4 overflow-hidden shadow mx-auto hover:shadow-xl">
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
            <div class="w-4/5 rounded-lg bg-white my-4 overflow-hidden shadow mx-auto hover:shadow-xl">
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



            <footer class="flex-center mb-4 mx-auto align-center"><p>Creado por: <a class="m-0 underline" target="_blank" href="https://jorgeorejas.com">Jorge Orejas</a></p></footer>
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
