import QuestList from "@/components/QuestList.js";
import { StyledLink } from "@/styles/StyledLink.js";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin: 0 0 1rem;
`;
export default function AvailableQuests({
  unsolvedQuests,
  updateChosenQuestIds,
  chosenQuestIds,
}) {
  const sortedSelectedQuests = chosenQuestIds.map((chosenQuestId) =>
    unsolvedQuests.find((unsolvedQuest) => unsolvedQuest.id === chosenQuestId)
  );
  const notSelectedQuests = unsolvedQuests.filter(
    (quest) => !chosenQuestIds.includes(quest.id)
  );

  const sortedAvailableQuests = [...sortedSelectedQuests, ...notSelectedQuests];

  return (
    <>
      <h2>Available Quests</h2>
      <p>Number of chosen quests: {chosenQuestIds.length}/3</p>
      <p>Select the quests you want to solve.</p>
      <QuestList
        quests={
          sortedSelectedQuests.length === 3
            ? sortedSelectedQuests
            : sortedAvailableQuests
        }
        updateChosenQuestIds={updateChosenQuestIds}
        displayCheckbox={false}
        chosenQuestIds={chosenQuestIds}
      />
      {chosenQuestIds.length === 3 && (
        <Wrapper>
          <p>You selected three quests to defeat the Questicator.</p>
          <StyledLink href="/unsolvedquests">
            Let the challenge begin!
          </StyledLink>
        </Wrapper>
      )}
    </>
  );
}
