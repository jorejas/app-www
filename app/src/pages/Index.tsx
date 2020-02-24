import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Index.css';

const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{match.params.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ match.params.name }</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <img src="https://www.jorgeorejas.com/src/img/card-top/Historiapp.jpeg" alt="photo"/>
            <IonCardTitle>
              Hola
            </IonCardTitle>
            <IonCardSubtitle>
              Prueba
            </IonCardSubtitle>
            <IonCardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quae dolorum excepturi, non harum ipsum cum, et quisquam eveniet qui repellat beatae placeat ipsa ea labore! 
              Voluptatem magni quis eligendi quo?
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page;
