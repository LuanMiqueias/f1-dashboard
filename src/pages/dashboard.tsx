import Box from "../components/Box";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "../styles/pages/Dashboard.module.css";
import RankingDrives from "../components/RankingDrives/RankingDrives";
import Head from "next/head";
import Competitions from "../components/Competitions/Competitions";
import Races from "../components/Races/Races";
import { RacesContext } from "../context/ContextRaces";
import React from "react";
import api from "../services/api";

const Dashboard = () => {
  const [dataDrives, setDataDrives] = React.useState([]);
  const [dataCompetitions, setDataCompetitios] = React.useState([]);
  const { idCompetition, races, updateIdCompetition } = React.useContext(
    RacesContext
  );
  const buttonSearch = (
    <span
      className={styles.search_competition}
      onClick={() => updateIdCompetition(null)}
    >
      Search
    </span>
  );

  React.useEffect(() => {
    (async () => {
      const response = await api.get("/rankings/drivers?season=2021", {
        headers: {
          "x-rapidapi-host": "v1.formula-1.api-sports.io",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      setDataDrives(response.data.response);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const response = await api.get("competitions", {
        headers: {
          "x-rapidapi-host": "v1.formula-1.api-sports.io",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      setDataCompetitios(response.data.response);
    })();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Box title="Ranking drives">
            <RankingDrives data={dataDrives} />
          </Box>
          <Box
            title="Races"
            description={
              !idCompetition ? "select one competitions" : "select one races"
            }
            button={buttonSearch}
          >
            {!idCompetition ? (
              <Competitions data={dataCompetitions} />
            ) : (
              <Races data={races.data} />
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
