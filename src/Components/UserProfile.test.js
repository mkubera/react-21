import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

const props = {
  name: "K",
  email: "k@is.ok",
};

test("renders user data", () => {
  render(<UserProfile name={props.name} email={props.email} />);
  const nameElement = screen.getByText(`User's name is ${props.name}`);
  const emailElement = screen.getByText(`Email ${props.email}`);
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});
