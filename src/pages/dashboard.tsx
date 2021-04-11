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
import Loading from "../components/Loading/Loading";

const Dashboard = () => {
  const [dataDrives, setDataDrives] = React.useState([]);
  const [dataCompetitions, setDataCompetitios] = React.useState([]);
  const [loadingDrivers, setLoadingDrivers] = React.useState(true);
  const [loadingCompetition, setLoadingCompetition] = React.useState(true);
  const { idCompetition, races, updateIdCompetition } = React.useContext(
    RacesContext
  );
  const buttonSearch = (
    <>
      {idCompetition && (
        <span
          className={styles.search_competition}
          onClick={() => updateIdCompetition(null)}
        >
          choose another
        </span>
      )}
    </>
  );

  React.useEffect(() => {
    setLoadingDrivers(true);
    (async () => {
      const response = await api.get("/rankings/drivers?season=2021", {
        headers: {
          "x-rapidapi-host": "v1.formula-1.api-sports.io",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      setDataDrives(response.data.response);
      setLoadingDrivers(false);
    })();
  }, []);
  React.useEffect(() => {
    setLoadingCompetition(true);
    (async () => {
      const response = await api.get("competitions", {
        headers: {
          "x-rapidapi-host": "v1.formula-1.api-sports.io",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      setDataCompetitios(response.data.response);
      setLoadingCompetition(false);
    })();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Box title="Ranking drives">
            {loadingDrivers ? <Loading /> : <RankingDrives data={dataDrives} />}
          </Box>
          <Box
            title="Races"
            description={
              !idCompetition ? "select one competitions" : "select one races"
            }
            button={buttonSearch}
          >
            {loadingCompetition ? (
              <Loading />
            ) : (
              <>
                {!idCompetition ? (
                  <Competitions data={dataCompetitions} />
                ) : (
                  <Races data={races.data} />
                )}
              </>
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
