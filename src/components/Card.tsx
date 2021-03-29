import { ReactNode } from "react";
import styles from "../styles/components/Card.module.css";
interface PropsCard {
  position: number;
  name: string;
  team: string;
  isPlayer?: boolean;
}
const Card = ({ name, position, team, isPlayer }: PropsCard) => {
  return (
    <div className={styles.card}>
      <p>
        <span className={styles.colorPosition}></span>
        {position}°
      </p>
      <div className={styles.content_card}>
        <h2>{name}</h2>
        <p>{team}</p>
      </div>
    </div>
  );
};

export default Card;
