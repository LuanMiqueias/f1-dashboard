import React from "react";
import { RacesContext } from "../../context/ContextRaces";
import styles from "./style.module.css";

const RaceInfo = () => {
  const { oneRace } = React.useContext(RacesContext);

  return (
    <div className={styles.container}>
      {oneRace ? (
        <div className={styles.content}>
          <div className={styles.imgRace}>
            <img
              src={oneRace.circuit.image}
              width="100%"
              alt={oneRace.circuit.name}
            />
          </div>
          <div className={styles.info}>
            <h2>
              Status: <span>{oneRace.status}</span>
            </h2>
            <h2>
              Distance:
              <span>
                {oneRace.distance ? oneRace.distance : "no informations"}
              </span>
            </h2>
            <h2>
              Laps:
              <span>
                {oneRace.laps.total ? oneRace.laps.total : "no informations"}
              </span>
            </h2>
          </div>
        </div>
      ) : (
        <div className={styles.content} style={{ minHeight: "400px" }}>
          <p className={styles.text}>Select one race for more informations</p>
        </div>
      )}
    </div>
  );
};

export default RaceInfo;
