import React from "react";
import { RacesContext } from "../../context/ContextRaces";
import Card from "../Card";
import styles from "./style.module.css";

interface PropsDrives {
  id: number;
  name: string;
  location: {
    country: string;
    city: string;
  };
}

const CardCompetition = ({ id, name, location }: PropsDrives) => {
  const { updateIdCompetition } = React.useContext(RacesContext);

  return (
    <div
      className={styles.card_competition}
      onClick={() => updateIdCompetition(id)}
    >
      <div className={styles.content_card_competition}>
        <h2>{name}</h2>
        <p>
          {location.country}, {location.city}
        </p>
      </div>
    </div>
  );
};

export default CardCompetition;
