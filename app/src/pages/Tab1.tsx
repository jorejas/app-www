import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historia de Oviedo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>Aplicación en construcción</IonCardTitle>
          <IonCardSubtitle>La información es temporal y el proceso puede durar.</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
          <img src="https://www.jorgeorejas.com/src/img/card-top/MIRDIY.jpg"/>
          <IonCardHeader>
            <IonCardSubtitle>Subtitle</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque nesciunt ut minus excepturi velit nam. 
            Est dolorum nihil quas voluptate nobis, consectetur harum voluptas distinctio quae commodi quis dicta labore.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src="https://www.jorgeorejas.com/src/img/card-top/MIRDIY.jpg"/>
          <IonCardHeader>
            <IonCardSubtitle>Subtitle</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque nesciunt ut minus excepturi velit nam. 
            Est dolorum nihil quas voluptate nobis, consectetur harum voluptas distinctio quae commodi quis dicta labore.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src="https://www.jorgeorejas.com/src/img/card-top/MIRDIY.jpg"/>
          <IonCardHeader>
            <IonCardSubtitle>Subtitle</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque nesciunt ut minus excepturi velit nam. 
            Est dolorum nihil quas voluptate nobis, consectetur harum voluptas distinctio quae commodi quis dicta labore.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src="https://www.jorgeorejas.com/src/img/card-top/MIRDIY.jpg"/>
          <IonCardHeader>
            <IonCardSubtitle>Subtitle</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque nesciunt ut minus excepturi velit nam. 
            Est dolorum nihil quas voluptate nobis, consectetur harum voluptas distinctio quae commodi quis dicta labore.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
