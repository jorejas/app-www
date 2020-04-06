import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBackButton, IonButtons, IonToast, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './Places.css';
import Catedral from './Places/Catedral/catedral';
import Rua from './Places/Rua_15/rua_15';

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
        <Catedral/>
        <Rua/>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>More to come</IonCardTitle>
            <IonCardSubtitle>In a future, after quarantine</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, modi veniam obcaecati deleniti illo repellat cumque rem delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel porro aliquid.
          </IonCardContent>
        </IonCard>
        <IonToast isOpen={showToast1} onDidDismiss={()=> setShowToast1(false)} message="Work in progress..." duration={1000}/>
      </IonContent>
    </IonPage>
  );
};

export default Hola;
