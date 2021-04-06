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
  return (
    <div className={styles.card_competition}>
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
