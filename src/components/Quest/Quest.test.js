import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Quest from "./Quest.js";

jest.mock("../../context.js", () => ({
  useQuestsDispatch: () => {
    const dispatch = jest.fn();
    return dispatch;
  },
}));

test("renders quest with quest title, not checked checkbox and quest labels", () => {
  render(
    <Quest
      title="Find the fairy floof!"
      labels={[
        { id: "f4625ed5-b8df-464e-8b91-f813b81c1c72", name: "practice" },
        { id: "da450c86-8675-4351-be63-476725c38981", name: "high-priority" },
      ]}
      isDone={false}
      isSelected={true}
      displayCheckbox={true}
    />
  );

  const title = screen.getByText("Find the fairy floof!");
  expect(title).toBeInTheDocument();

  const checkbox = screen.getByLabelText("not solved yet");
  expect(checkbox).toBeInTheDocument();

  const labels = screen.getAllByRole("listitem");
  expect(labels).toHaveLength(2);

  const wizardIcon = screen.getByTitle("wizard");
  expect(wizardIcon).toBeInTheDocument();

  const highPriorityIcon = screen.getByTitle("high");
  expect(highPriorityIcon).toBeInTheDocument();
});

test("renders quest with quest title, checked checkbox and quest labels", () => {
  render(
    <Quest
      title="Find the fairy floof!"
      labels={[
        { id: "f4625ed5-b8df-464e-8b91-f813b81c1c72", name: "practice" },
        { id: "da450c86-8675-4351-be63-476725c38981", name: "high-priority" },
      ]}
      isDone={true}
      isSelected={true}
      displayCheckbox={true}
    />
  );

  const title = screen.getByText("Find the fairy floof!");
  expect(title).toBeInTheDocument();

  const checkbox = screen.getByLabelText("solved");
  expect(checkbox).toBeInTheDocument();

  const labels = screen.getAllByRole("listitem");
  expect(labels).toHaveLength(2);

  const wizardIcon = screen.getByTitle("wizard");
  expect(wizardIcon).toBeInTheDocument();

  const highPriorityIcon = screen.getByTitle("high");
  expect(highPriorityIcon).toBeInTheDocument();
});

test("renders quest with only quest label if one label has the 'none'", () => {
  render(
    <Quest
      title="Find the fairy floof!"
      labels={[
        { id: "f4625ed5-b8df-464e-8b91-f813b81c1c72", name: "practice" },
        { id: "da450c86-8675-4351-be63-476725c38981", name: "none" },
      ]}
      isDone={true}
      isSelected={true}
      displayCheckbox={true}
    />
  );

  const title = screen.getByText("Find the fairy floof!");
  expect(title).toBeInTheDocument();

  const checkbox = screen.getByLabelText("solved");
  expect(checkbox).toBeInTheDocument();

  const labels = screen.getAllByRole("listitem");
  expect(labels).toHaveLength(1);

  const wizardIcon = screen.getByTitle("wizard");
  expect(wizardIcon).toBeInTheDocument();

  const highPriorityIcon = screen.queryByTitle("high");
  expect(highPriorityIcon).not.toBeInTheDocument();
});

test("renders quest with select button if displayCheckbox is false", () => {
  render(
    <Quest
      title="Find the fairy floof!"
      labels={[
        { id: "f4625ed5-b8df-464e-8b91-f813b81c1c72", name: "practice" },
        { id: "da450c86-8675-4351-be63-476725c38981", name: "none" },
      ]}
      isDone={true}
      isSelected={false}
      displayCheckbox={false}
    />
  );

  const selectButton = screen.getByRole("button", { name: "Select" });
  expect(selectButton).toBeInTheDocument();
});

test("renders quest with remove button if displayCheckbox is false and isSelected is true", () => {
  render(
    <Quest
      title="Find the fairy floof!"
      labels={[
        { id: "f4625ed5-b8df-464e-8b91-f813b81c1c72", name: "practice" },
        { id: "da450c86-8675-4351-be63-476725c38981", name: "none" },
      ]}
      isDone={true}
      isSelected={true}
      displayCheckbox={false}
    />
  );

  const removeButton = screen.getByRole("button", { name: "Remove" });
  expect(removeButton).toBeInTheDocument();
});

test("changes label text when checkbox is clicked", async () => {
  const user = userEvent.setup();

  render(
    <Quest
      title="Find the fairy floof!"
      labels={[
        { id: "f4625ed5-b8df-464e-8b91-f813b81c1c72", name: "practice" },
        { id: "da450c86-8675-4351-be63-476725c38981", name: "none" },
      ]}
      isDone={true}
      isSelected={true}
      displayCheckbox={true}
    />
  );

  const solvedCheckbox = screen.getByLabelText("solved");
  expect(solvedCheckbox).toBeInTheDocument();

  await user.click(solvedCheckbox);

  const unsolvedCheckbox = screen.getByLabelText("not solved yet");
  expect(unsolvedCheckbox).toBeInTheDocument();
});
