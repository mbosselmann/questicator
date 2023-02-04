import styled from "styled-components";
import { useRouter } from "next/router.js";

import { StyledButton } from "@/styles/StyledButton.js";
import Textarea from "@/components/Textarea.js";
import QuestNotes from "@/components/QuestNotes.js";
import BackButton from "@/components/BackButton.js";
import { StyledForm } from "@/styles/StyledForm.js";

const Wrapper = styled.div`
  background-color: var(--light-bg-color);
  padding: 0.5rem;
`;

export default function AddNotes({ quests, addNote }) {
  const router = useRouter();
  const { id } = router.query;
  const selectedQuest = quests.find((quest) => quest.id === id);

  if (!selectedQuest) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNote(event.target.note.value, id);
    event.target.reset();
  }
  return (
    <Wrapper>
      <BackButton />
      <h2 id="add-note">Add Note</h2>
      <StyledForm aria-labelledby="add-note" onSubmit={handleSubmit}>
        <Textarea id="note" name="note" labelText="Your Note" required />
        <StyledButton type="submit">Add</StyledButton>
      </StyledForm>
      {selectedQuest.notes && <QuestNotes notes={selectedQuest.notes} />}
    </Wrapper>
  );
}
