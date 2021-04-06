import Box from "../components/Box";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "../styles/pages/Dashboard.module.css";
import RankingDrives from "../components/RankingDrives/RankingDrives";
import Head from "next/head";
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
const Dashboard = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Box title="Ranking drives">
            <RankingDrives data={fakeData} />
          </Box>
          <Box title="Races" description="select one races">
            olá
          </Box>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
