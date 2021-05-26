import { render, screen } from "@testing-library/react";
import Painters from "./Painters";

const painters = ["Salvador Dali", "Pablo Picasso", "Jean Renoir"];

test("renders the name of a painter", () => {
  render(<Painters />);

  painters.forEach((painter) => {
    let el = screen.getByText(painter);
    expect(el).toBeInTheDocument();
  });
});
