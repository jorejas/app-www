import React from 'react';
import ReactDOM from 'react-dom';
import { IonCard , IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonSlides, IonSlide, useIonViewDidEnter } from '@ionic/react';
import mandala from './img/mandala.jpg';
import nave from './img/nave.jpg';
import torre from './img/torre.jpg';
import mosaico from './img/mosaico.jpg';
import vistas from './img/vistas.jpg';

const slidesOpts = {
    initiaSlide: 1,
    speed: 400
};

const Catedral: React.FC = () => {
    return(
        <IonCard color="light">
            <IonSlides pager={true} options={slidesOpts}>
                <IonSlide><IonImg src={mandala}/></IonSlide>
                <IonSlide><IonImg src={nave}/></IonSlide>
                <IonSlide><IonImg src={torre}/></IonSlide>
                <IonSlide><IonImg src={mosaico}/></IonSlide>
                <IonSlide><IonImg src={vistas}/></IonSlide>
            </IonSlides>
            <IonCardHeader>
              <IonCardTitle>Catedral</IonCardTitle>
              <IonCardSubtitle>Esto es una prueba</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam quod modi laudantium quibusdam autem nesciunt ipsa repudiandae reiciendis voluptas hic quo, perferendis eligendi fuga et nostrum officiis sit. Aut.
            </IonCardContent>
        </IonCard>
    )
}

export default Catedral;