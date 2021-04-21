import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RacesContext, RacesProvider } from "../../context/ContextRaces";
import CardRaces from "./CardRaces";

const fakeData = {
  id: 1,
  date: "1995-12-17T03:24:00",
  type: "type test",
  circuit: {
    name: "name test",
  },
};
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
it("Should match snapshot", () => {
  const { container } = render(<CardRaces {...fakeData} />);

  expect(container.firstChild).toMatchSnapshot();
});

it("Should change the id on onclick", () => {
  const contextCallback = jest.fn();
  const { container } = render(
    <RacesProvider>
      <CardRaces {...fakeData} />
      <RacesContext.Consumer>{contextCallback}</RacesContext.Consumer>
    </RacesProvider>
  );
  act(() => {
    contextCallback.mock.calls[0][0].updateRaces(racesFake);
  });
  fireEvent.click(container.firstElementChild);
  expect(contextCallback.mock.calls[2][0].oneRace.id).toEqual(1);
});
