import CardRaces from "../CardRaces/CardRaces";
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
  return (
    <div className={styles.container}>
      <div className={styles.content_races}>
        {data.map((item) => {
          return (
            <CardRaces
              key={item.id}
              id={item.id}
              circuit={item.circuit}
              type={item.type}
              date={item.date}
            />
          );
        })}
      </div>
      <div className={styles.content_races}>
        <RaceInfo />
      </div>
    </div>
  );
};

export default Races;
