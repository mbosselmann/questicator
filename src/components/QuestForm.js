import styled from "styled-components";
import { useState } from "react";

import TextInput from "../components/TextInput.js";
import Textarea from "../components/Textarea.js";
import RadioInput from "../components/RadioInput.js";
import { StyledButton } from "../styles/StyledButton.js";
import { StyledList } from "@/styles/StyledList.js";
import { StyledForm } from "@/styles/StyledForm.js";

const Fieldset = styled.fieldset`
  border: 5px solid var(--border-color);
  border-radius: 0.3rem;
`;

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

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
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
      <Fieldset>
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
      </Fieldset>
      <Fieldset>
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
      </Fieldset>
      <StyledButton type="submit">
        {selectedQuest ? "Update Quest" : "Add Quest"}
      </StyledButton>
    </StyledForm>
  );
}
