import { render, screen } from "@testing-library/react";
import QuestNotes from "./index.js";

test("renders notes and heading", () => {
  const notes = ["Amazing!", "I need to investigate this further..."];
  render(<QuestNotes notes={notes} />);

  const notesHeading = screen.getByText("Your notes:");
  expect(notesHeading).toBeInTheDocument();

  const firstNote = screen.getByText("Amazing!");
  expect(firstNote).toBeInTheDocument();

  const secondNote = screen.getByText("I need to investigate this further...");
  expect(secondNote).toBeInTheDocument();
});
