import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuestForm from "./QuestForm.js";

jest.mock("../../lib/services/getLongitudeLatitude.js", () => {
  return jest.fn(() => {
    return { longitude: 13.4125, latitude: 52.52437 };
  });
});

test("renders form with three groups: one group with input and textarea, two groups with radio buttons", () => {
  render(<QuestForm ariaLabelledbyId={"add-quest-form"} />);

  const form = screen.getByRole("form");
  expect(form).toBeInTheDocument();

  const fieldsets = screen.getAllByRole("group");
  expect(fieldsets).toHaveLength(3);

  const firstGroup = screen.getByRole("group", { name: "Basic Information:" });
  const input = screen.getByLabelText("Title");
  const textarea = screen.getByLabelText("Description");

  expect(firstGroup).toContainElement(input);
  expect(firstGroup).toContainElement(textarea);

  const secondGroup = screen.getByRole("group", {
    name: "Select kind of quest:",
  });

  const practiceRadio = screen.getByLabelText("Practice");
  const discoveryRadio = screen.getByLabelText("Discovery");
  const protectRadio = screen.getByLabelText("Protect");

  expect(secondGroup).toContainElement(practiceRadio);
  expect(secondGroup).toContainElement(discoveryRadio);
  expect(secondGroup).toContainElement(protectRadio);

  const thirdGroup = screen.getByRole("group", {
    name: "How important is this quest? (optional)",
  });
  const importantRadio = screen.getByLabelText("High");
  const notImportantRadio = screen.getByLabelText("Low");

  expect(thirdGroup).toContainElement(importantRadio);
  expect(thirdGroup).toContainElement(notImportantRadio);
});

test("renders form with default values", () => {
  const exampleQuest = {
    id: "d3fa0144-cbdd-4845-b215-e9c6c155e68e",
    title: "Find the golden wolf",
    description: "Maybe there is also a treasure waiting for me?",
    labels: [
      { id: "05bec04c-b139-4424-a253-ee554db94bdf", name: "discovery" },
      { id: "eac02276-6a5b-40bc-9a38-3861ac379606", name: "low-priority" },
    ],
    isDone: true,
    location: {
      locationName: "Elbphilharmonie Hamburg",
      street: "Platz der Deutschen Einheit",
      streetNumber: "1",
      postalCode: "20457",
      place: "Hamburg",
      latitude: 53.54141893739151,
      longitude: 9.984184442472383,
    },
    notes: [
      "Or may it be better to solve another quest first?",
      "I hope I can handle this!",
      "Try this out!",
    ],
    dateSelected:
      "Thu Dec 11 2023 15:16:49 GMT+0200 (Central European Summer Time)",
    dateFinished:
      "Thu Dec 11 2022 15:16:49 GMT+0200 (Central European Summer Time)",
  };

  render(<QuestForm selectedQuest={exampleQuest} />);

  const titleInput = screen.getByLabelText("Title");
  expect(titleInput).toHaveValue("Find the golden wolf");

  const descriptionInput = screen.getByLabelText("Description");
  expect(descriptionInput).toHaveValue(
    "Maybe there is also a treasure waiting for me?"
  );

  const discoveryRadio = screen.getByLabelText("Discovery");
  expect(discoveryRadio).toBeChecked();

  const notImportantRadio = screen.getByLabelText("Low");
  expect(notImportantRadio).toBeChecked();

  const nameOfLocationInput = screen.getByLabelText("Name of location");
  expect(nameOfLocationInput).toHaveValue("Elbphilharmonie Hamburg");

  const streetInput = screen.getByLabelText("Street");
  expect(streetInput).toHaveValue("Platz der Deutschen Einheit");

  const streetNumberInput = screen.getByLabelText("Street number");
  expect(streetNumberInput).toHaveValue("1");

  const postalCodeInput = screen.getByLabelText("Postal code");
  expect(postalCodeInput).toHaveValue("20457");

  const placeInput = screen.getByLabelText("Place");
  expect(placeInput).toHaveValue("Hamburg");
});

test("shows location form if 'show location form' button is clicked", async () => {
  const user = userEvent.setup();

  render(<QuestForm />);

  const showLocationFormButton = screen.getByRole("button", {
    name: "Show location form",
  });
  expect(showLocationFormButton).toBeInTheDocument();

  const locationFormQuery = screen.queryByRole("group", {
    name: "Location (optional)",
  });
  expect(locationFormQuery).not.toBeInTheDocument();

  await user.click(showLocationFormButton);

  const locationForm = screen.getByRole("group", {
    name: "Location (optional)",
  });

  expect(locationForm).toBeInTheDocument();
});

test("calls onSubmit function with form data", async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();
  const handleOnDisplayQuestLabels = jest.fn();

  render(
    <QuestForm
      onSubmit={handleSubmit}
      selectedQuest={null}
      onDisplayQuestLabels={handleOnDisplayQuestLabels}
    />
  );

  const titleInput = screen.getByLabelText("Title");
  const descriptionInput = screen.getByLabelText("Description");
  const practiceRadio = screen.getByLabelText("Practice");
  const importantRadio = screen.getByLabelText("High");

  const showLocationFormButton = screen.getByRole("button", {
    name: "Show location form",
  });

  await user.click(showLocationFormButton);

  const nameOfLocationInput = screen.getByLabelText("Name of location");
  const streetInput = screen.getByLabelText("Street");
  const streetNumberInput = screen.getByLabelText("Street number");
  const postalCodeInput = screen.getByLabelText("Postal code");
  const placeInput = screen.getByLabelText("Place");

  await user.type(titleInput, "Find the golden wolf");
  await user.type(
    descriptionInput,
    "Maybe there is also a treasure waiting for me?"
  );
  await user.click(practiceRadio);
  await user.click(importantRadio);
  await user.type(nameOfLocationInput, "Elbphilharmonie Hamburg");
  await user.type(streetInput, "Platz der Deutschen Einheit");
  await user.type(streetNumberInput, "1");
  await user.type(postalCodeInput, "20457");
  await user.type(placeInput, "Hamburg");

  const submitButton = screen.getByRole("button", { name: "Add Quest" });
  await user.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    title: "Find the golden wolf",
    description: "Maybe there is also a treasure waiting for me?",
    kindOfQuest: "practice",
    location: {
      latitude: 52.52437,
      locationName: "Elbphilharmonie Hamburg",
      longitude: 13.4125,
      street: "Platz der Deutschen Einheit",
      streetNumber: "1",
      postalCode: "20457",
      place: "Hamburg",
    },
    priority: "high-priority",
  });
});

test("calls onDisplayQuestLabels function if radio button is clicked", async () => {
  const user = userEvent.setup();

  const handleOnDisplayQuestLabels = jest.fn();

  render(
    <QuestForm
      onSubmit={jest.fn()}
      selectedQuest={null}
      onDisplayQuestLabels={handleOnDisplayQuestLabels}
    />
  );

  const discoveryRadio = screen.getByLabelText("Discovery");
  await user.click(discoveryRadio);

  expect(handleOnDisplayQuestLabels).toHaveBeenCalled();
});
