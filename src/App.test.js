import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Users App/i);
  expect(linkElement).toBeInTheDocument();
});

// test("doesn't render app title", () => {
//   render(<App />);
//   const linkElement = screen.not.getByText(/doesn't Users App/i);
//   expect(linkElement).not.toBeInTheDocument();
// });
