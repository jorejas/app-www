import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBackButton, IonButtons, IonToast, IonButton } from '@ionic/react';
import React, { useState } from 'react';
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
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>WHAT AN AMAZING APP</IonCardTitle>
            <IonCardSubtitle>But it's still work in progress...</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, modi veniam obcaecati deleniti illo repellat cumque rem delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel porro aliquid.
            <IonButton onClick={()=> setShowToast1(true)} expand="block">→</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Lorem Ipsum</IonCardTitle>
            <IonCardSubtitle>Lorem</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, modi veniam obcaecati deleniti illo repellat cumque rem delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel porro aliquid.
          </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Lorem Ipsum</IonCardTitle>
            <IonCardSubtitle>Lorem</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, modi veniam obcaecati deleniti illo repellat cumque rem delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel porro aliquid.
          </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Lorem Ipsum</IonCardTitle>
            <IonCardSubtitle>Lorem</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, modi veniam obcaecati deleniti illo repellat cumque rem delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel porro aliquid.
          </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Lorem Ipsum</IonCardTitle>
            <IonCardSubtitle>Lorem</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, modi veniam obcaecati deleniti illo repellat cumque rem delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel porro aliquid.
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
