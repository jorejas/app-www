import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Paginas */
import Home from './pages/Home';
import Hola from './pages/Hola';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Slides */

import { IonSlides, IonSlide, IonContent } from '@ionic/react';

// Parameters

const slideOpts = {
  effect: "fade",
  autoHeight: true,
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
  },
  scrollbar:{
    el: '.swiper-scrollbar',
    draggable: true,
  },
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true}/>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/hola" component={Hola} exact={true}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
