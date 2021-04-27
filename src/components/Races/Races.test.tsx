import { act, render, screen } from "@testing-library/react";
import { RacesContext, RacesProvider } from "../../context/ContextRaces";
import Loading from "../Loading/Loading";
import Races from "./Races";

const fakeData = [
  {
    id: 1,
    distance: "100",
    date: "1995-12-17T03:24:00",
    status: "test status",
    season: 2021,
    type: "type test",
    laps: {
      total: 10,
    },
    circuit: {
      id: 5,
      name: "name",
      image: "img.jpg",
    },
  },
];
it("Should math snapshot", () => {
  const { container } = render(<Races data={fakeData} />);

  expect(container.firstChild).toMatchSnapshot();
});

it("Should show the message if data is an empty array", () => {
  render(<Races data={[]} />);
  expect(
    screen.getByText(/Not even a race is scheduled for this competition/i)
  ).toBeInTheDocument();
});

it("Should show loading if loading is equal to true", () => {
  const contextCallback = jest.fn();
  render(
    <RacesProvider>
      <Races data={fakeData} />
      <RacesContext.Consumer>{contextCallback}</RacesContext.Consumer>
    </RacesProvider>
  );
  expect(screen.getByTestId(/loading/i));
});
