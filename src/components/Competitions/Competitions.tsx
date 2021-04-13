import React from "react";
import CardCompetition from "../CardCompetition/CardCompetition";
import styles from "./style.module.css";

interface PropsDrives {
  id: number;
  name: string;
  location: {
    country: string;
    city: string;
  };
}
interface IData {
  data: PropsDrives[];
}
const Competitions = ({ data }: IData) => {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <CardCompetition
            id={item.id}
            name={item.name}
            location={item.location}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Competitions;
