import { render } from "@testing-library/react";
import Loading from "./Loading";

it("Should math snapshot", () => {
  const { container } = render(<Loading />);

  expect(container.firstChild).toMatchSnapshot();
});
