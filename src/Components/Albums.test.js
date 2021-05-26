import { render, screen } from "@testing-library/react";
import Albums from "./Albums";

test("renders nothing", () => {
  render(<Albums />);

  let el = screen.getByText("Albums");
  expect(el).toBeInTheDocument();
});
