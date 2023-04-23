import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckboxForm from "./index.js";

test("renders component with correct icon", () => {
  render(<CheckboxForm />);

  const checkbox = screen.getByLabelText("not solved yet");
  expect(checkbox).toBeInTheDocument();

  const notCheckedIcon = screen.getByTitle("not-checked");
  expect(notCheckedIcon).toBeInTheDocument();
});

test("checkbox is initially unchecked", () => {
  render(<CheckboxForm />);

  const checkbox = screen.getByLabelText("not solved yet");

  expect(checkbox).not.toBeChecked();
});

test("checkbox can be checked", async () => {
  const mockUpdateQuestStatus = jest.fn();

  render(
    <CheckboxForm updateQuestStatus={mockUpdateQuestStatus} isDone={false} />
  );

  const checkbox = screen.getByLabelText("not solved yet");

  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  const checkedIcon = screen.getByTitle("checked");
  expect(checkedIcon).toBeInTheDocument();
});

test("checkbox can be checked and unchecked", async () => {
  const mockUpdateQuestStatus = jest.fn();

  render(
    <CheckboxForm updateQuestStatus={mockUpdateQuestStatus} isDone={false} />
  );

  const checkbox = screen.getByLabelText("not solved yet");

  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  const checkedIcon = screen.getByTitle("checked");
  expect(checkedIcon).toBeInTheDocument();

  await userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();

  const notCheckedIcon = screen.getByTitle("not-checked");
  expect(notCheckedIcon).toBeInTheDocument();
});

test("updateQuestStatus function is called on checkbox change", async () => {
  const mockUpdateQuestStatus = jest.fn();

  render(
    <CheckboxForm isDone={false} updateQuestStatus={mockUpdateQuestStatus} />
  );

  const checkbox = screen.getByLabelText("not solved yet");
  await userEvent.click(checkbox);
  expect(mockUpdateQuestStatus).toHaveBeenCalled();
});

test("updates check box form aria-label attribute correctly", async () => {
  const mockUpdateQuestStatus = jest.fn();
  render(
    <CheckboxForm isDone={false} updateQuestStatus={mockUpdateQuestStatus} />
  );
  const checkboxForm = screen.getByRole("form");
  const checkbox = screen.getByLabelText("not solved yet");

  expect(checkboxForm).toHaveAttribute(
    "aria-label",
    "click if quest is solved"
  );

  await userEvent.click(checkbox);

  expect(checkboxForm).toHaveAttribute(
    "aria-label",
    "click if quest is not solved yet"
  );
});

test("checkbox input is hidden", () => {
  render(<CheckboxForm isDone={false} />);

  const checkboxInput = screen.getByLabelText("not solved yet");
  expect(checkboxInput).toHaveStyle({ display: "none" });
});
