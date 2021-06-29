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

// function addTwoNums(num1, num2) {
//   return num1 + num2;
// }

// let num1 = 1;
// let num2 = 2;
// let result = addTwoNums(num1, num2)
// expect(result).toBe(num1 + num2) // true

// let badResult = addTwoNums(num1, 0)
// expect(badResult).not.toBe(num1 + num2) // true
