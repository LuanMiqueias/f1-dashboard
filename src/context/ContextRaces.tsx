import React, { ReactNode } from "react";

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
  selectRace: (id: number) => void;
  updateRaces: (data: IData) => void;
  updateIdCompetition: (id: number) => void;
}
const fakeRaces = [
  {
    id: 1373,
    competition: {
      id: 1,
      name: "Australia Grand Prix",
      location: {
        country: "Australia",
        city: "Melbourne",
      },
    },
    circuit: {
      id: 1,
      name: "Albert Park",
      image: "https://media.api-sports.io/formula-1/circuits/1.png",
    },
    season: 2021,
    type: "Race",
    laps: {
      current: null,
      total: 58,
    },
    distance: "307.6 Kms",
    timezone: "utc",
    date: "2021-11-21T06:00:00+00:00",
    weather: null,
    status: "Scheduled",
  },
  {
    id: 1374,
    competition: {
      id: 1,
      name: "Australia Grand Prix",
      location: {
        country: "Australia",
        city: "Melbourne",
      },
    },
    circuit: {
      id: 1,
      name: "Albert Park",
      image: "https://media.api-sports.io/formula-1/circuits/1.png",
    },
    season: 2021,
    type: "1st Qualifying",
    laps: {
      current: null,
      total: null,
    },
    distance: null,
    timezone: "utc",
    date: "2021-11-20T06:00:00+00:00",
    weather: null,
    status: "Scheduled",
  },
  {
    id: 1375,
    competition: {
      id: 1,
      name: "Australia Grand Prix",
      location: {
        country: "Australia",
        city: "Melbourne",
      },
    },
    circuit: {
      id: 1,
      name: "Albert Park",
      image: "https://media.api-sports.io/formula-1/circuits/1.png",
    },
    season: 2021,
    type: "3rd Practice",
    laps: {
      current: null,
      total: null,
    },
    distance: null,
    timezone: "utc",
    date: "2021-11-20T03:00:00+00:00",
    weather: null,
    status: "Scheduled",
  },
  {
    id: 1376,
    competition: {
      id: 1,
      name: "Australia Grand Prix",
      location: {
        country: "Australia",
        city: "Melbourne",
      },
    },
    circuit: {
      id: 1,
      name: "Albert Park",
      image: "https://media.api-sports.io/formula-1/circuits/1.png",
    },
    season: 2021,
    type: "2nd Practice",
    laps: {
      current: null,
      total: null,
    },
    distance: null,
    timezone: "utc",
    date: "2021-11-19T05:00:00+00:00",
    weather: null,
    status: "Scheduled",
  },
  {
    id: 1377,
    competition: {
      id: 1,
      name: "Australia Grand Prix",
      location: {
        country: "Australia",
        city: "Melbourne",
      },
    },
    circuit: {
      id: 1,
      name: "Albert Park",
      image: "https://media.api-sports.io/formula-1/circuits/1.png",
    },
    season: 2021,
    type: "1st Practice",
    laps: {
      current: null,
      total: null,
    },
    distance: null,
    timezone: "utc",
    date: "2021-11-19T01:30:00+00:00",
    weather: null,
    status: "Scheduled",
  },
];
export const RacesContext = React.createContext({} as RacesContent);

export const RacesProvider: React.FC<ReactNode> = ({ children }) => {
  const [races, setRaces] = React.useState(null as IData);
  const [idCompetition, setIdCompetition] = React.useState(null as number);
  const [oneRace, setOneRace] = React.useState(null as PropsRaces);

  React.useEffect(() => {
    //Deverá set feito um Fetch para api usando o ID da competicao
    setRaces({ data: [...fakeRaces] });
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
    const race = races.data.filter((item) => {
      return item.id === id;
    });
    setOneRace(race[0]);
  }
  return (
    <RacesContext.Provider
      value={{
        races,
        idCompetition,
        oneRace,
        selectRace,
        updateRaces,
        updateIdCompetition,
      }}
    >
      {children}
    </RacesContext.Provider>
  );
};
