import { render, screen } from "@testing-library/react";
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
  // expect(container.firstChild).toMatchSnapshot();
});
