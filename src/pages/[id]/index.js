import styled from "styled-components";
import { useRouter } from "next/router.js";

import BackButton from "@/components/BackButton.js";
import QuestLabels from "@/components/QuestLabels.js";
import { StyledLink } from "@/styles/StyledLink.js";
import { StyledButton } from "@/styles/StyledButton.js";
import QuestNotes from "@/components/QuestNotes.js";

const Article = styled.article`
  background-color: var(--light-bg-color);
  padding: 0.5rem;
`;

const FlexContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const GridContainer = styled.section`
  display: grid;
  gap: 0.5rem;
`;

export default function QuestDetails({
  quests,
  updateQuestStatus,
  deleteQuest,
}) {
  const router = useRouter();
  const { id } = router.query;
  const selectedQuest = quests.find((quest) => quest.id === id);

  if (!selectedQuest) {
    return null;
  }

  function handleDelete() {
    deleteQuest(selectedQuest.id);
    router.back();
  }

  return (
    <Article>
      <FlexContainer>
        <BackButton />
        <QuestLabels labels={selectedQuest.labels} size={"5rem"} />
      </FlexContainer>
      <h2>{selectedQuest.title}</h2>
      <p>{selectedQuest.description}</p>
      {selectedQuest.notes && <QuestNotes notes={selectedQuest.notes} />}
      <GridContainer>
        <p>
          {selectedQuest.isDone
            ? "You solved this quest."
            : " You have not solved this quest yet."}
        </p>
        <StyledButton
          type="button"
          onClick={() => updateQuestStatus(selectedQuest.id)}
        >
          Not true?
        </StyledButton>
        <h3>Your options:</h3>
        <StyledLink href={`${selectedQuest.id}/edit`}>Edit quest</StyledLink>
        <StyledLink href={`${selectedQuest.id}/addnote`}>Add note</StyledLink>
        <StyledButton type="button" onClick={handleDelete}>
          Delete quest
        </StyledButton>
      </GridContainer>
    </Article>
  );
}
