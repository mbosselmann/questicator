import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation.js";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

test("renders a navigation bar with four links", () => {
  render(<Navigation />);

  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(4);
});

test("checks if every link has a screen reader only text", () => {
  render(<Navigation />);

  const selectQuestsLink = screen.getByRole("link", { name: "Select quests" });
  expect(selectQuestsLink).toBeInTheDocument();

  const selectQuestsLinkText = screen.getByText("Select quests");
  expect(selectQuestsLinkText).toHaveStyle({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    "white-space": "nowrap",
    "border-width": "0",
  });

  const inProgressLink = screen.getByRole("link", { name: "In Progress" });
  expect(inProgressLink).toBeInTheDocument();

  const inProgressLinkText = screen.getByText("In Progress");
  expect(inProgressLinkText).toHaveStyle({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    "white-space": "nowrap",
    "border-width": "0",
  });

  const solvedLink = screen.getByRole("link", { name: "Solved" });
  expect(solvedLink).toBeInTheDocument();

  const solvedLinkText = screen.getByText("Solved");
  expect(solvedLinkText).toHaveStyle({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    "white-space": "nowrap",
    "border-width": "0",
  });

  const addQuestLink = screen.getByRole("link", { name: "Add Quest" });
  expect(addQuestLink).toBeInTheDocument();

  const addQuestLinkText = screen.getByText("Add Quest");
  expect(addQuestLinkText).toHaveStyle({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    "white-space": "nowrap",
    "border-width": "0",
  });
});
