import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import QuestForm from "@/components/QuestForm.js";
import { StyledButton } from "@/styles/StyledButton.js";
import { StyledLink } from "@/styles/StyledLink.js";
import FormHeader from "@/components/FormHeader.js";

const Wrapper = styled.div`
  background-color: var(--light-bg-color);
  padding: 1rem 0.5rem;
`;

const ActionContainer = styled.div`
  display: grid;
  gap: 0.3rem;
`;

export default function AddQuest({
  addQuest,
  newQuestLabels,
  onDisplayQuestLabels,
}) {
  const [isNewQuestAdded, setIsNewQuestAdded] = useState(false);
  const [newQuestId, setNewQuestId] = useState("");

  function onSubmit(formData) {
    const { title, description } = formData;
    const newQuest = {
      id: uuidv4(),
      title,
      description,
      labels: newQuestLabels,
      isDone: false,
    };
    addQuest(newQuest);
    setIsNewQuestAdded(true);
    setNewQuestId(newQuest.id);
  }

  return (
    <Wrapper>
      {isNewQuestAdded ? (
        <section>
          <h2>Success!</h2>
          <p>
            The quest was added to your list of unsolved quests. What do you
            want to do next?
          </p>
          <ActionContainer>
            <StyledButton
              type="button"
              onClick={() => setIsNewQuestAdded(false)}
            >
              Add another quest
            </StyledButton>
            <StyledLink href={`/${newQuestId}`}>
              See details of newly added quest
            </StyledLink>
            <StyledLink href="/">Go to unsolved quests</StyledLink>
            <StyledLink href="/solvedquests">Go to solved quests</StyledLink>
          </ActionContainer>
        </section>
      ) : (
        <>
          <FormHeader title="Add a Quest" questLabels={newQuestLabels} />
          <QuestForm
            onSubmit={onSubmit}
            onDisplayQuestLabels={onDisplayQuestLabels}
          />
        </>
      )}
    </Wrapper>
  );
}