import { render, screen } from "@testing-library/react";
import TextInput from "./index.js";

test("renders text input with a label and an input", () => {
  render(<TextInput labelText="Name" id={"name"} type={"text"} />);

  const input = screen.getByLabelText("Name");
  expect(input).toHaveAttribute("type", "text");
});

test("renders text input with default value", () => {
  render(<TextInput labelText="Name" id={"name"} defaultValue={"John"} />);

  const input = screen.getByLabelText("Name");
  expect(input).toHaveValue("John");
});

test("renders text value without default value if no value is set", () => {
  render(<TextInput labelText="Name" id={"name"} />);

  const input = screen.getByLabelText("Name");
  expect(input).not.toHaveValue("John");
});

test("renders input with required attribute if required is true", () => {
  render(<TextInput labelText="Name" id={"name"} required={true} />);

  const input = screen.getByLabelText("Name");
  expect(input).toBeRequired();
});

test("renders input without required attribute if required is false", () => {
  render(<TextInput labelText="Name" id={"name"} required={false} />);

  const input = screen.getByLabelText("Name");
  expect(input).not.toBeRequired();
});
