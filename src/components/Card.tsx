import React, { ReactNode } from "react";
import styles from "../styles/components/Card.module.css";
interface PropsCard {
  position: number;
  name: string;
  team: string;
  image: string;
  points: number;
  isPlayer?: boolean;
}
const Card = ({ name, position, team, image, points, isPlayer }: PropsCard) => {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setShowInfo(!showInfo)}>
        <p>
          <span className={styles.colorPosition}></span>
          {position}°
        </p>
        <div className={styles.content_card}>
          <h2>{name}</h2>
          <p>{team}</p>
        </div>
      </div>
      {showInfo && (
        <div className={styles.cardInfo}>
          <div className={styles.cardInfo_content}>
            <img src={image} alt={name} />
            <div className={styles.cardInfo_content_text}>
              <p>
                <span>Nationality:</span>British
              </p>
              <p>
                <span>Points:</span>
                {points}
              </p>
              <p>
                <span>Team:</span>
                {team}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
