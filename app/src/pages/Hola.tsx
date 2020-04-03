import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonBackButton, IonButtons, IonText, IonToast, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Hola.css';

const Hola: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
           <IonBackButton defaultHref="/home"/>
          </IonButtons>
          <IonTitle>Historia de Oviedo</IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>WHAT AN AMAZING APP</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, modi veniam obcaecati deleniti illo repellat cumque rem delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel porro aliquid.
            <IonButton onClick={()=> setShowToast1(true)} expand="block">→</IonButton>
          </IonCardContent>
        </IonCard>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={()=> setShowToast1(false)}
          message="Work in progress..."
          duration={1000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Hola;
