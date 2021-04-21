import { render, screen } from "@testing-library/react";
import Races from "./Races";

const fakeData = [
  {
    id: 1,
    date: "1",
    status: "test",
    season: 2021,
    type: "string",
    laps: {
      total: 10,
    },
    circuit: {
      id: 2,
      name: "string-test",
      image: "img",
    },
  },
];
it("Should math snapshot", () => {
  const { container } = render(<Races data={fakeData} />);

  expect(container.firstChild).toMatchSnapshot();
});
