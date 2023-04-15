import { render, screen } from "@testing-library/react";
import Date from "./Date.js";

jest.mock("../../context.js", () => ({
  useQuests: jest.fn(() => ({
    today: "Thu Apr 13 2023 15:19:24 GMT+0200 (Central European Summer Time)",
  })),
}));

test("renders component with correct date", () => {
  render(
    <Date day="Tue Apr 11 2023 15:19:24 GMT+0200 (Central European Summer Time)" />
  );

  const date = screen.getByText("11.04.2023");
  expect(date).toBeInTheDocument();
});

test("displays the current date when no date is passed in as a prop", () => {
  render(<Date />);

  const date = screen.getByText("13.04.2023");
  expect(date).toBeInTheDocument();
});
