import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RacesContext, RacesProvider } from "../../context/ContextRaces";
import CardCompetition from "./CardCompetition";
const fakeData = {
  id: 2070,
  name: "name1",
  location: {
    country: "country1",
    city: "city1",
  },
};
it("Should have snapshot", () => {
  const { container } = render(<CardCompetition {...fakeData} />);
  expect(container).toMatchSnapshot();
});

it("Shoud have props(name, country, city)", () => {
  render(<CardCompetition {...fakeData} />);
  expect(screen.getByRole("heading", { name: /name1/i })).toBeInTheDocument;
  expect(screen.getByText(/city1/i)).toBeInTheDocument;
  expect(screen.getByText(/country1/i)).toBeInTheDocument;
});

it("Shoud called function and set idCompetition", async () => {
  const contextCallback = jest.fn();
  const { container } = render(
    <RacesProvider>
      <CardCompetition {...fakeData} />
      <RacesContext.Consumer>{contextCallback}</RacesContext.Consumer>
    </RacesProvider>
  );
  fireEvent.click(container.firstElementChild);
  expect(contextCallback.mock.calls[1][0].idCompetition).toEqual(2070);
});
