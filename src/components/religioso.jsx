import React, { Component } from 'react';
import './styles/tailwind.css';
import MetaTags from 'react-meta-tags';
import port from './img/puerto.jpg';

const MainPage=()=> {
    return (
        <div>
            <h3>Welcome</h3>
            <small>Main Page</small>
            <link to="/religioso">Show</link>
        </div>
    )
}

function Menu() {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the "main-nav" element
          var $target = document.getElementById('main-nav');
  
          // Toggle the class on "main-nav"
          $target.classList.toggle('hidden');
  
        });
      });
    }
  
  };

class Religioso extends Component{ 
    render(){
    return(
    <div class="flex flex-col bg-gray-100 items-center font-sans font-light transition-all">
        <div className="wrapper">
          <MetaTags>
            <title>Historia de Oviedo</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
        </div>
            <div class="border-b bg-oviedoblue w-11/12 my-4 py-6 px-6 rounded-lg px-2 transition-all">
                <div class="container mx-auto transition-all">
                    <nav class="flex items-center justify-between flex-wrap transition-all">
                        <div class="flex items-center flex-no-shrink text-white mr-6 transition-all">
                            <span class="font-semibold text-white text-xl tracking-tight transition-all">Historia de Oviedo</span>
                        </div>
                        <div class="block sm:hidden transition-all">
                            <button class="navbar-burger flex items-center px-3 py-2 border rounded-lg text-white border-white hover:text-white hover:border-white transition-all">
                                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                        </div>
                        <div id="main-nav" class="w-full leading-none flex-grow sm:flex items-center sm:w-auto hidden transition-100 transition-all">
                            <div class="text-sm sm:flex-grow">
                                <a href="#religion" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-grey-300 mr-4">
                                   Religioso
                                </a>
                                <a href="#civil" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-grey-300 mr-4">
                                   Guerra Civil
                                </a>
                                <a href="#pre" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-grey-300 mr-4">
                                   Prerrománico
                                </a>
                                <a href="#about" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-grey-300 mr-4">
                                   About
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <footer id="about" class="flex-center mb-4 mx-auto align-center"><p>Creado por: <a class="m-0 underline" target="_blank" href="https://jorgeorejas.com">Jorge Orejas</a></p></footer>
    </div>)
    }
}

export default Religioso;