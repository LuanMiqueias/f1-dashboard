import React, { ReactNode } from "react";
import Loading from "../Loading/Loading";
import styles from "./style.module.css";
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
  const [imgLoading, setImgLoading] = React.useState(true);

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
            <div className={styles.img_driver}>
              {imgLoading && (
                <div className={styles.loading_img}>
                  <Loading />
                </div>
              )}
              <img
                src={image}
                alt={name}
                className={!imgLoading ? styles.img_loaded : ""}
                onLoad={() => setImgLoading(false)}
              />
            </div>
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
