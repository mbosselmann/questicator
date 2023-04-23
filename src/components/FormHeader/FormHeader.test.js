import { render, screen } from "@testing-library/react";
import FormHeader from "./index.js";

const exampleQuestLabels = [
  { id: "1", name: "protect" },
  { id: "2", name: "high-priority" },
];

test("renders component", () => {
  render(<FormHeader title="Edit Quest" questLabels={exampleQuestLabels} />);

  const header = screen.getByRole("heading");
  expect(header).toHaveTextContent("Edit Quest");

  const labels = screen.getAllByRole("listitem");
  expect(labels).toHaveLength(2);
});
