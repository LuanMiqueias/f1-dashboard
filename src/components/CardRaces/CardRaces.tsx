import React from "react";
import { RacesContext } from "../../context/ContextRaces";
import RaceInfo from "../RaceInfo/RaceInfo";
import styles from "./style.module.css";

interface PropsRaces {
  id: number;
  date: string;
  type: string;
  circuit: {
    name: string;
  };
}
const CardRaces = ({ id, type, date, circuit }: PropsRaces) => {
  const { selectRace, oneRace } = React.useContext(RacesContext);
  function formatDate(date: string) {
    const arrayMonths = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dev",
    ];
    const dateConvert = new Date(date);
    const month = arrayMonths[dateConvert.getMonth()];
    const day = dateConvert.getDate();
    const hours = dateConvert.getHours();
    const minutes = dateConvert.getMinutes();
    let type = "PM";
    if (hours > 0 && hours < 12) {
      type = "AM";
    }
    return `${month} ${day}, ${hours === 0 ? "00" : hours}:${
      minutes === 0 ? "00" : minutes
    } ${type}`;
  }
  return (
    <>
      <div
        className={styles.card_races}
        onClick={() => {
          selectRace(id);
        }}
      >
        <div className={styles.content_card_races}>
          <h2>{circuit.name}</h2>
          <p>{type}</p>
        </div>
        <div className={styles.content_card_races}>
          <p>{formatDate(date)}</p>
        </div>
      </div>
      {screen.width < 958 && <>{oneRace?.id === id && <RaceInfo />}</>}
    </>
  );
};

export default CardRaces;
