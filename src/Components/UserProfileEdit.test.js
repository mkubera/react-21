import { render, screen } from "@testing-library/react";
import UserProfileEdit from "./UserProfileEdit";

const props = {
  placeholder: "enter your user name",
};

test("renders user profile edit input field", () => {
  render(<UserProfileEdit {...props} onInputFn={(e) => e} />);
  const inputElement = screen.getByPlaceholderText(props.placeholder);
  expect(inputElement).toBeInTheDocument();
});
