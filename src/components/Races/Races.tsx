import React from "react";
import { RacesContext } from "../../context/ContextRaces";
import CardRaces from "../CardRaces/CardRaces";
import Loading from "../Loading/Loading";
import RaceInfo from "../RaceInfo/RaceInfo";
import styles from "./style.module.css";

interface PropsRaces {
  id: number;
  distance?: string;
  date: string;
  status: string;
  season: number;
  type: string;
  laps: {
    total?: number;
  };
  circuit: {
    id: number;
    name: string;
    image: string;
  };
}
interface IData {
  data: PropsRaces[];
}
const Races = ({ data }: IData) => {
  const { loading } = React.useContext(RacesContext);
  return (
    <div className={styles.container}>
      <div className={styles.content_races}>
        {loading ? (
          <Loading />
        ) : (
          data.map((item) => {
            return (
              <CardRaces
                key={item.id}
                id={item.id}
                circuit={item.circuit}
                type={item.type}
                date={item.date}
              />
            );
          })
        )}
      </div>
      {screen.width >= 960 && (
        <div className={`${styles.content_races} ${styles.content_races_info}`}>
          <RaceInfo />
        </div>
      )}
    </div>
  );
};

export default Races;
