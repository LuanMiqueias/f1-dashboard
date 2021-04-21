import { render } from "@testing-library/react";
import Competitions from "./Competitions";

const fakeData = [
  {
    id: 1,
    name: "string",
    location: {
      country: "string",
      city: "string",
    },
  },
];

it("Should math snapshot", () => {
  const { container } = render(<Competitions data={fakeData} />);

  expect(container.firstChild).toMatchSnapshot();
});
