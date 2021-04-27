import { render, screen } from "@testing-library/react";
import Dashboard from "./dashboard";

const DriversFake = [
  {
    position: 1,
    driver: {
      id: 1,
      name: "string",
      image: "string",
    },
    team: {
      id: 0,
      name: "string",
      logo: "string",
    },
    points: 0,
    season: 0,
  },
];

const competitionsFake = [
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
  const { container } = render(
    <Dashboard
      drivers={DriversFake}
      competitions={competitionsFake}
      error={null}
    />
  );

  expect(container).toMatchSnapshot();
});

it("Should show message if contain error", () => {
  render(
    <Dashboard
      drivers={DriversFake}
      competitions={competitionsFake}
      error={"error"}
    />
  );

  expect(screen.getByText(/error/i)).toBeInTheDocument;
});
