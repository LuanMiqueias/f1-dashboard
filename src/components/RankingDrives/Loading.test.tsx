import { render } from "@testing-library/react";
import RankingDrives from "./RankingDrives";

const fakeData = [
  {
    position: 1,
    driver: {
      id: 1,
      name: "string",
      image: "string",
    },
    team: {
      id: 1,
      name: "string",
      logo: "string",
    },
    points: 1,
    season: 1,
  },
];
it("Should math snapshot", () => {
  const { container } = render(<RankingDrives data={fakeData} />);

  expect(container.firstChild).toMatchSnapshot();
});
