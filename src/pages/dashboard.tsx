import Box from "../components/Box";
import Header from "../components/Header";
import styles from "../styles/pages/Dashboard.module.css";
import RankingDrives from "../components/RankingDrives/RankingDrives";
import Competitions from "../components/Competitions/Competitions";
import Races from "../components/Races/Races";
import { RacesContext } from "../context/ContextRaces";
import React from "react";
import api from "../services/api";
import { GetStaticProps } from "next";

interface IDataDrivers {
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
interface IDataCompetitions {
  id: number;
  name: string;
  location: {
    country: string;
    city: string;
  };
}
interface IProps {
  drivers: IDataDrivers[];
  competitions: IDataCompetitions[];
  error: string;
}
const Dashboard: React.FC<IProps> = ({ drivers, competitions, error }) => {
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
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Box title="Ranking drives">
            {!error && <RankingDrives data={drivers} />}
          </Box>
          <Box
            title="Races"
            description={
              !idCompetition ? "select one competitions" : "select one races"
            }
            button={buttonSearch}
          >
            {error ? (
              <p className="waring">{error}</p>
            ) : (
              <>
                {!idCompetition ? (
                  <Competitions data={competitions} />
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

export const getStaticProps: GetStaticProps = async () => {
  const headers_API = {
    "x-rapidapi-host": "v1.formula-1.api-sports.io",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
  };
  let error = "";
  //----------START
  const response_drivers = await api.get("/rankings/drivers?season=2021", {
    headers: headers_API,
  });
  const drivers: IDataDrivers[] = response_drivers.data.response;
  //----------END

  //----------START
  const response_competitions = await api.get("competitions", {
    headers: headers_API,
  });
  const competitions: IDataCompetitions[] = response_competitions.data.response;
  //----------END
  if (
    response_competitions.data.errors.requests ||
    response_drivers.data.errors.requests
  ) {
    error =
      "Sorry for the inconvenience, this site uses a free API plan and you or someone else has exceeded the limit 😭, please try again later.";
  }
  return {
    props: {
      drivers,
      competitions,
      error,
    },
    revalidate: 259200,
  };
};
export default Dashboard;
