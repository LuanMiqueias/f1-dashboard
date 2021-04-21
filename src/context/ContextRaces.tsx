import React, { ReactNode } from "react";
import api from "../services/api";

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
interface RacesContent {
  races: IData;
  idCompetition: number;
  oneRace: PropsRaces;
  loading: boolean;
  error: string;
  selectRace: (id: number) => void;
  updateRaces: (data: IData) => void;
  updateIdCompetition: (id: number) => void;
}
export const RacesContext = React.createContext({} as RacesContent);

export const RacesProvider: React.FC<ReactNode> = ({ children }) => {
  const [races, setRaces] = React.useState(null as IData);
  const [idCompetition, setIdCompetition] = React.useState(null as number);
  const [oneRace, setOneRace] = React.useState(null as PropsRaces);
  const [loading, setLoading] = React.useState(true as boolean);
  const [error, setError] = React.useState("" as string);

  React.useEffect(() => {
    //Deverá set feito um Fetch para api usando o ID da competicao
    if (idCompetition) {
      setLoading(true);
      (async () => {
        const response = await api.get(
          `races?competition=${idCompetition}&season=2021`,
          {
            headers: {
              "x-rapidapi-host": "v1.formula-1.api-sports.io",
              "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        if (response.data.errors.request) {
          setError(
            "Sorry for the inconvenience, this site uses a free API plan and you or someone else has exceeded the limit 😭, please try again later."
          );
        }
        setRaces({ data: response.data.response });
        setLoading(false);
      })();
    }
  }, [idCompetition]);

  function updateRaces(data: IData) {
    setRaces(data);
    setOneRace(null);
  }
  function updateIdCompetition(id: number) {
    setIdCompetition(id);
    setOneRace(null);
  }
  function selectRace(id: number) {
    if (races) {
      const race = races.data.filter((item) => {
        return item.id === id;
      });
      setOneRace(race[0]);
    }
  }
  return (
    <RacesContext.Provider
      value={{
        races,
        idCompetition,
        oneRace,
        loading,
        error,
        selectRace,
        updateRaces,
        updateIdCompetition,
      }}
    >
      {children}
    </RacesContext.Provider>
  );
};
