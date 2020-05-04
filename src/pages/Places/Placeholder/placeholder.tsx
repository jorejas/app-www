import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
const Placeholder: React.FC = () => {
  return (
    <div>
      <IonCard color="light">
        <IonCardHeader>
          <IonCardTitle>More to come</IonCardTitle>
          <IonCardSubtitle>In a future, after quarantine</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          facere, modi veniam obcaecati deleniti illo repellat cumque rem
          delectus vel, maxime, sint minima nemo expedita. Cumque dolorem vel
          porro aliquid.
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Placeholder;
