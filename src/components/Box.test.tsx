import Box from "./Box";
import { render, screen } from "@testing-library/react";

it("Should math snapshot", () => {
  const { container } = render(<Box title="title 1" />);
  expect(container.firstChild).toMatchSnapshot();
});

it("Should have title", () => {
  render(<Box title="title 1" />);
  const title = screen.getByRole("heading", { name: /title 1/i });

  expect(title).toHaveTextContent(/title 1/i);
});
it("Should have description", () => {
  render(<Box title="title 1" description="description1" />);

  const description = screen.getByText(/description1/i);
  expect(description).toHaveTextContent(/description1/i);
});

it("Should have button", () => {
  const htmlBtn = <button>button1</button>;
  render(<Box title="title 1" button={htmlBtn} />);

  const button = screen.getByRole("button", { name: /button1/i });
  expect(button).toBeInTheDocument();
});
