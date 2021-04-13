import Link from "next/link";
import Card from "../Card";
import styles from "./style.module.css";

interface PropsDrives {
  position: number;
  driver: {
    id: number;
    name: string;
    image: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  season: number;
}
interface IData {
  data: PropsDrives[];
}
const RankingDrives = ({ data }: IData) => {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <Card
            name={item.driver.name}
            position={item.position}
            team={item.team.name}
            key={item.driver.id + "_ranking_drivers"}
            image={item.driver.image}
            points={item.points}
          />
        );
      })}
    </div>
  );
};

export default RankingDrives;
