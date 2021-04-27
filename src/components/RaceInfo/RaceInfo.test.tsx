import { act, render, screen } from "@testing-library/react";
import { RacesContext, RacesProvider } from "../../context/ContextRaces";
import RaceInfo from "./RaceInfo";

const racesFake = {
  data: [
    {
      id: 1,
      date: "1995-12-17T03:24:00",
      status: "string",
      season: 1,
      type: "string",
      laps: {
        total: 10,
      },
      circuit: {
        id: 1,
        name: "string",
        image: "string",
      },
    },
  ],
};

it("Should math snapshot", () => {
  const contextCallback = jest.fn();

  const { container } = render(
    <RacesProvider>
      <RaceInfo />
      <RacesContext.Consumer>{contextCallback}</RacesContext.Consumer>
    </RacesProvider>
  );
  act(() => {
    contextCallback.mock.calls[0][0].updateRaces(racesFake);
  });
  act(() => {
    contextCallback.mock.calls[1][0].selectRace(1);
  });

  expect(container.firstChild).toMatchSnapshot();
});

it("Should show the message if oneRace is equal to null", () => {
  render(<RaceInfo />);
  const text = screen.getByText(/Select one race for more informations/i);
  expect(text).toBeInTheDocument();
});
