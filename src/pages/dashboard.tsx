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
const fakeData = [
  {
    position: 1,
    driver: {
      id: 20,
      name: "Lewis Hamilton",
      image: "https://media.api-sports.io/formula-1/drivers/20.png",
    },
    team: {
      id: 5,
      name: "Mercedes-AMG Petronas",
      logo: "https://media.api-sports.io/formula-1/teams/5.png",
    },
    points: 25,
    wins: null,
    behind: null,
    season: 2021,
  },
  {
    position: 2,
    driver: {
      id: 25,
      name: "Max Verstappen",
      image: "https://media.api-sports.io/formula-1/drivers/25.png",
    },
    team: {
      id: 1,
      name: "Red Bull Racing",
      logo: "https://media.api-sports.io/formula-1/teams/1.png",
    },
    points: 18,
    wins: null,
    behind: null,
    season: 2021,
  },
  {
    position: 3,
    driver: {
      id: 5,
      name: "Valtteri Bottas",
      image: "https://media.api-sports.io/formula-1/drivers/5.png",
    },
    team: {
      id: 5,
      name: "Mercedes-AMG Petronas",
      logo: "https://media.api-sports.io/formula-1/teams/5.png",
    },
    points: 16,
    wins: null,
    behind: null,
    season: 2021,
  },
  {
    position: 4,
    driver: {
      id: 49,
      name: "Lando Norris",
      image: "https://media.api-sports.io/formula-1/drivers/49.png",
    },
    team: {
      id: 2,
      name: "McLaren Racing",
      logo: "https://media.api-sports.io/formula-1/teams/2.png",
    },
    points: 12,
    wins: null,
    behind: null,
    season: 2021,
  },
  {
    position: 5,
    driver: {
      id: 10,
      name: "Sergio Perez",
      image: "https://media.api-sports.io/formula-1/drivers/10.png",
    },
    team: {
      id: 1,
      name: "Red Bull Racing",
      logo: "https://media.api-sports.io/formula-1/teams/1.png",
    },
    points: 10,
    wins: null,
    behind: null,
    season: 2021,
  },
  {
    position: 6,
    driver: {
      id: 34,
      name: "Charles Leclerc",
      image: "https://media.api-sports.io/formula-1/drivers/34.png",
    },
    team: {
      id: 3,
      name: "Scuderia Ferrari",
      logo: "https://media.api-sports.io/formula-1/teams/3.png",
    },
    points: 8,
    wins: null,
    behind: null,
    season: 2021,
  },
  {
    position: 7,
    driver: {
      id: 14,
      name: "Daniel Ricciardo",
      image: "https://media.api-sports.io/formula-1/drivers/14.png",
    },
    team: {
      id: 2,
      name: "McLaren Racing",
      logo: "https://media.api-sports.io/formula-1/teams/2.png",
    },
    points: 6,
    wins: null,
    behind: null,
    season: 2021,
  },
  {
    position: 8,
    driver: {
      id: 24,
      name: "Carlos Sainz Jr",
      image: "https://media.api-sports.io/formula-1/drivers/24.png",
    },
    team: {
      id: 3,
      name: "Scuderia Ferrari",
      logo: "https://media.api-sports.io/formula-1/teams/3.png",
    },
    points: 4,
    wins: null,
    behind: null,
    season: 2021,
  },
];
const fakeCompetitions = [
  {
    id: 1,
    name: "Australia Grand Prix",
    location: {
      country: "Australia",
      city: "Melbourne",
    },
  },
  {
    id: 19,
    name: "Japan Grand Prix",
    location: {
      country: "Japan",
      city: "Suzuka",
    },
  },
  {
    id: 20,
    name: "USA Grand Prix",
    location: {
      country: "USA",
      city: "Elroy",
    },
  },
  {
    id: 21,
    name: "Mexico Grand Prix",
    location: {
      country: "Mexico",
      city: "Mexico",
    },
  },
  {
    id: 22,
    name: "Brazil Grand Prix",
    location: {
      country: "Brazil",
      city: "São Paulo",
    },
  },
  {
    id: 23,
    name: "Abu Dhabi Grand Prix",
    location: {
      country: "Abu Dhabi",
      city: "Yas Marina, Abou Dabi ",
    },
  },
  {
    id: 24,
    name: "Portugal Grand Prix",
    location: {
      country: "Portugal",
      city: "Algarve",
    },
  },
  {
    id: 25,
    name: "Steiermark Grand Prix",
    location: {
      country: "Austria",
      city: " Spielberg",
    },
  },
  {
    id: 26,
    name: "Formula 1 70th Anniversary Grand Prix",
    location: {
      country: "Great Britain",
      city: "Silverstone Northamptonshire",
    },
  },
  {
    id: 27,
    name: "Toscana Grand Prix",
    location: {
      country: "Italy",
      city: "Mugello",
    },
  },
  {
    id: 28,
    name: "Eifel Grand Prix",
    location: {
      country: "Germany",
      city: null,
    },
  },
  {
    id: 29,
    name: "Emilia Romagna Grand Prix",
    location: {
      country: "Italy",
      city: "Imola",
    },
  },
  {
    id: 30,
    name: "Turkey Grand Prix",
    location: {
      country: "Turkey",
      city: "Istanbul",
    },
  },
  {
    id: 31,
    name: "Bahrain Grand Prix 2",
    location: {
      country: "Bahrain",
      city: "Sakhir",
    },
  },
  {
    id: 32,
    name: "Saudi Arabia Grand Prix",
    location: {
      country: "Saudi Arabia ",
      city: "Djeddah",
    },
  },
];

const Dashboard = () => {
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
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Box title="Ranking drives">
            <RankingDrives data={fakeData} />
          </Box>
          <Box
            title="Races"
            description={
              !idCompetition ? "select one competitions" : "select one races"
            }
            button={buttonSearch}
          >
            {!idCompetition ? (
              <Competitions data={fakeCompetitions} />
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
