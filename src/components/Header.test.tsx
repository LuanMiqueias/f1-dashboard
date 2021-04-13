import { render } from "@testing-library/react";
import Header from "./Header";

it("Should math snapshot", () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});
