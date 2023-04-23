import { render, screen } from "@testing-library/react";
import QuestLabels from "./index.js";

const exampleQuestLabels = [
  { id: "1", name: "protect" },
  { id: "2", name: "high-priority" },
];

test("renders component", () => {
  render(<QuestLabels labels={exampleQuestLabels} />);

  const questLabelList = screen.getByRole("list");
  expect(questLabelList).toBeInTheDocument();

  const labels = screen.getAllByRole("listitem");
  expect(labels).toHaveLength(2);
});

test("sets the correct role attribute on the list element", () => {
  render(<QuestLabels labels={exampleQuestLabels} />);

  const list = screen.getByRole("list");
  expect(list).toHaveAttribute("role", "list");
});

test("displays the correct icons", () => {
  render(<QuestLabels labels={exampleQuestLabels} />);

  const protectIcon = screen.getByTitle("star");
  expect(protectIcon).toBeInTheDocument();

  const highPriorityIcon = screen.getByTitle("high");
  expect(highPriorityIcon).toBeInTheDocument();
});

test("does not display any icons when the labels prop is not passed in", () => {
  render(<QuestLabels />);

  const questLabels = screen.queryByRole("list");
  expect(questLabels).toBeInTheDocument();
});
