import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioInput from "./RadioInput.js";

test("renders component", () => {
  render(<RadioInput id="1" value={false} labelText="practice" />);

  const radioInput = screen.getByLabelText("practice");
  expect(radioInput).toBeInTheDocument();

  const radioIcon = screen.getByTitle("radio");
  expect(radioIcon).toBeInTheDocument();
});

test("checkbox is initially unchecked", () => {
  render(<RadioInput id="1" labelText="practice" />);

  const radioInput = screen.getByLabelText("practice");

  expect(radioInput).not.toBeChecked();
});

test("checkbox is checked if isChecked is true", () => {
  render(<RadioInput id="1" labelText="practice" isChecked={true} />);

  const radioInput = screen.getByLabelText("practice");
  expect(radioInput).toBeChecked();
});

test("calls onChange function of input is clicked", async () => {
  const mockOnChange = jest.fn();

  render(
    <RadioInput
      onChange={mockOnChange}
      isChecked={false}
      id="1"
      labelText="practice"
    />
  );

  const radioInput = screen.getByLabelText("practice");
  await userEvent.click(radioInput);
  expect(mockOnChange).toHaveBeenCalled();
});
