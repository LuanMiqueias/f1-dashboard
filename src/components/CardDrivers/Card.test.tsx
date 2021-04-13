import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";

const fakeData = {
  position: 1,
  name: "name1",
  team: "team1",
  image: "img1",
  points: 10,
};
it("Should math snapshot", () => {
  const { container } = render(<Card {...fakeData} />);

  expect(container.firstChild).toMatchSnapshot();
});
it("Should have props if showInfo is equal to false", () => {
  render(<Card {...fakeData} />);

  //Name
  expect(screen.getByRole("heading", { name: /name1/i }));
  //Position
  expect(screen.getByText(/1°/i)).toBeInTheDocument();
  //Team
  expect(screen.getByText(/team1/i)).toBeInTheDocument();
  //Points
  expect(screen.queryByText(/10/i)).not.toBeInTheDocument();
  //Image Driver
  expect(screen.queryByRole("img", { name: /name1/i })).not.toBeInTheDocument();
});

it("Should have props if showInfo is equal to true", () => {
  const { container } = render(<Card {...fakeData} />);
  fireEvent.click(container.firstElementChild);

  //Image Driver
  expect(screen.getByRole("img", { name: /name1/i })).toBeInTheDocument();
  //Points
  expect(screen.getByText(/10/i)).toBeInTheDocument();
});
