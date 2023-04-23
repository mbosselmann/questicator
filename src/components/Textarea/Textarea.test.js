import { render, screen } from "@testing-library/react";
import Textarea from "./Textarea.js";

test("renders a label and a textarea without a default value if no default value is provided", () => {
  render(
    <Textarea id="description" name="description" labelText="Description" />
  );

  const textarea = screen.getByRole("textbox", { name: "Description" });
  expect(textarea).not.toHaveValue();
});

test("renders a textarea with a default value", () => {
  render(
    <Textarea
      id="description"
      name="description"
      labelText="Description"
      defaultValue="Find the fairy floof!"
    />
  );

  const textarea = screen.getByRole("textbox", { name: "Description" });
  expect(textarea).toHaveValue("Find the fairy floof!");
});

test("renders a textarea that is required if required is true", () => {
  render(
    <Textarea
      id="description"
      name="description"
      labelText="Description"
      required
    />
  );

  const textarea = screen.getByRole("textbox", { name: "Description" });
  expect(textarea).toBeRequired();
});

test("renders a textarea that is not required if required is false", () => {
  render(
    <Textarea
      id="description"
      name="description"
      labelText="Description"
      required={false}
    />
  );

  const textarea = screen.getByRole("textbox", { name: "Description" });
  expect(textarea).not.toBeRequired();
});
