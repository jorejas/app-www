import React from 'react';
import ReactDOM from 'react-dom';
import { IonCard , IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonSlides, IonSlide, useIonViewDidEnter } from '@ionic/react';
import catedral from './img/catedral.jpg';


const slidesOpts = {
    initiaSlide: 1,
    speed: 400
};

const Rua: React.FC = () => {
    return(
        <IonCard color="light">
            <IonSlides pager={true} options={slidesOpts}>
                <IonSlide><IonImg src={catedral}/></IonSlide>
            </IonSlides>
            <IonCardHeader>
              <IonCardTitle>Rua 15</IonCardTitle>
              <IonCardSubtitle>Esto es una prueba</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam quod modi laudantium quibusdam autem nesciunt ipsa repudiandae reiciendis voluptas hic quo, perferendis eligendi fuga et nostrum officiis sit. Aut.
            </IonCardContent>
        </IonCard>
    )
}

export default Rua;