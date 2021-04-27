import { render } from "@testing-library/react";
import Home from "../index";

it("Should math snapshot", () => {
  const { container } = render(<Home />);

  expect(container.firstChild).toMatchSnapshot();
});
