import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackButton from "./BackButton.js";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },
}));

test("renders component with the correct text", () => {
  render(<BackButton />);

  const button = screen.getByRole("button", { name: "back" });
  expect(button).toBeInTheDocument();
});

test("displays the button icon", () => {
  render(<BackButton />);

  const backIcon = screen.getByTitle("back");
  expect(backIcon).toBeInTheDocument();
});

test("triggers the router back function on click", async () => {
  const mockRouter = jest.spyOn(require("next/router"), "useRouter");

  render(<BackButton router={mockRouter} />);

  await userEvent.click(screen.getByRole("button"));
  expect(mockRouter).toHaveBeenCalled();
});
