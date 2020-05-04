import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import React from "react";
import "./Home.css";
import mosaico from "./Places/Catedral/img/mosaico.jpg";
import mandala from "./Places/Catedral/img/mandala.jpg";
import vistas from "./Places/Catedral/img/vistas.jpg";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historia de Oviedo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard button={true} href="/hola" color="light">
          <IonImg src={mosaico} alt="img" />
          <IonCardHeader>
            <IonCardTitle>Hola</IonCardTitle>
            <IonCardSubtitle>Esto es una prueba</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quam quod modi laudantium quibusdam autem nesciunt ipsa repudiandae
            reiciendis voluptas hic quo, perferendis eligendi fuga et nostrum
            officiis sit. Aut.
          </IonCardContent>
        </IonCard>
        <IonCard button={true} color="light">
          <IonImg src={vistas} alt="img" />
          <IonCardHeader>
            <IonCardTitle>Hola</IonCardTitle>
            <IonCardSubtitle>Esto es una prueba</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quam quod modi laudantium quibusdam autem nesciunt ipsa repudiandae
            reiciendis voluptas hic quo, perferendis eligendi fuga et nostrum
            officiis sit. Aut.
          </IonCardContent>
        </IonCard>
        <IonCard button={true} color="light">
          <IonImg src={mandala} alt="img" />
          <IonCardHeader>
            <IonCardTitle>Hola</IonCardTitle>
            <IonCardSubtitle>Esto es una prueba</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quam quod modi laudantium quibusdam autem nesciunt ipsa repudiandae
            reiciendis voluptas hic quo, perferendis eligendi fuga et nostrum
            officiis sit. Aut.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
