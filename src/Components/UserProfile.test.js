import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

const props = {
  name: "K",
  email: "k@is.ok",
  userType: "director",
  isEditing: true,
};

test("renders user data", () => {
  render(<UserProfile {...props} onClickFn={(e) => e} />);
  const nameElement = screen.getByText(props.name);
  const emailElement = screen.getByText(props.email);
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});
