import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import React from "react";
import "./Places.css";
import Catedral from "./Places/Catedral/catedral";
import Rua from "./Places/Rua_15/rua_15";
import Placeholder from "./Places/Placeholder/placeholder";
const Hola: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Historia de Oviedo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Catedral />
        <Rua />
        <Placeholder />
      </IonContent>
    </IonPage>
  );
};

export default Hola;
