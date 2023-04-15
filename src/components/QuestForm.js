import { useState } from "react";
import getLongitudeLatitude from "@/lib/services/getLongitudeLatitude.js";
import formatQuestData from "@/lib/format/formatQuestData.js";

import LocationForm from "./LocationForm.js";
import TextInput from "../components/TextInput.js";
import Textarea from "../components/Textarea.js";
import RadioInput from "./RadioInput/RadioInput.js";

import { StyledButton } from "../styles/StyledButton.js";
import { StyledList } from "@/styles/StyledList.js";
import { StyledForm } from "@/styles/StyledForm.js";
import { StyledFieldset } from "@/styles/StyledFieldset.js";

export default function QuestForm({
  onSubmit,
  onDisplayQuestLabels,
  selectedQuest,
}) {
  const [selectedKindOfQuest, setSelectedKindOfQuest] = useState(
    selectedQuest?.labels.find(
      (label) =>
        label.name === "practice" ||
        label.name === "discovery" ||
        label.name === "protect"
    ).name ?? ""
  );
  const [selectedPriority, setSelectedPriority] = useState(
    selectedQuest?.labels?.find(
      (label) => label.name === "high-priority" || label.name === "low-priority"
    )?.name ?? ""
  );
  const [isLocationFormDisplayed, setIsLocationFormDisplayed] = useState(
    selectedQuest?.location ? true : false
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dataLocation = {
      locationName: data.locationName,
      street: data.street,
      streetNumber: data.streetNumber,
      postalCode: data.postalCode,
      place: data.place,
    };
    const locationLongitudeLatitude = await getLongitudeLatitude(dataLocation);
    const questData = formatQuestData(data, locationLongitudeLatitude);
    onSubmit(questData);
  }

  function handleChange(event) {
    onDisplayQuestLabels(event.target.name, event.target.value);

    if (event.target.name === "kindOfQuest") {
      setSelectedKindOfQuest(event.target.value);
    } else {
      setSelectedPriority(event.target.value);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldset>
        <legend>Basic Information</legend>
        <TextInput
          id="title"
          name="title"
          labelText="Title"
          type="text"
          defaultValue={selectedQuest ? selectedQuest.title : ""}
          required
        />
        <Textarea
          id="description"
          name="description"
          labelText="Description"
          defaultValue={selectedQuest ? selectedQuest.description : ""}
          required
        />
      </StyledFieldset>
      <StyledFieldset>
        <legend>Select kind of quest:</legend>
        <StyledList>
          <li>
            <RadioInput
              id="practice"
              value="practice"
              name="kindOfQuest"
              onChange={handleChange}
              labelText="Practice"
              isChecked={selectedKindOfQuest === "practice"}
              required
            />
          </li>
          <li>
            <RadioInput
              id="discovery"
              value="discovery"
              name="kindOfQuest"
              onChange={handleChange}
              labelText="Discovery"
              isChecked={selectedKindOfQuest === "discovery"}
              required
            />
          </li>
          <li>
            <RadioInput
              id="protect"
              value="protect"
              name="kindOfQuest"
              onChange={handleChange}
              labelText="Protect"
              isChecked={selectedKindOfQuest === "protect"}
              required
            />
          </li>
        </StyledList>
      </StyledFieldset>
      <StyledFieldset>
        <legend>How important is this quest? (optional)</legend>
        <StyledList>
          <li>
            <RadioInput
              id="high"
              value="high-priority"
              name="priority"
              labelText="High"
              isChecked={selectedPriority === "high-priority"}
              onChange={handleChange}
            />
          </li>
          <li>
            <RadioInput
              id="low"
              value="low-priority"
              name="priority"
              labelText="Low"
              isChecked={selectedPriority === "low-priority"}
              onChange={handleChange}
            />
          </li>
          <li>
            {selectedQuest && (
              <RadioInput
                id="none"
                value="none"
                name="priority"
                labelText="None"
                isChecked={selectedPriority === "none"}
                onChange={handleChange}
              />
            )}
          </li>
        </StyledList>
      </StyledFieldset>
      <StyledButton
        type="button"
        onClick={() => setIsLocationFormDisplayed(!isLocationFormDisplayed)}
      >
        {isLocationFormDisplayed ? "Close location form" : "Show location form"}
      </StyledButton>
      {isLocationFormDisplayed && (
        <LocationForm
          location={selectedQuest.location}
          isLocationFormDisplayed={isLocationFormDisplayed}
        />
      )}
      <StyledButton type="submit">
        {selectedQuest ? "Update Quest" : "Add Quest"}
      </StyledButton>
    </StyledForm>
  );
}
