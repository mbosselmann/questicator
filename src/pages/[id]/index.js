import styled from "styled-components";
import { useRouter } from "next/router.js";
import dynamic from "next/dynamic";
import { useQuests, useQuestsDispatch } from "@/context.js";

import BackButton from "@/components/BackButton/BackButton.js";
import QuestLabels from "@/components/QuestLabels.js";
import { StyledLink } from "@/styles/StyledLink.js";
import { StyledButton } from "@/styles/StyledButton.js";
import QuestNotes from "@/components/QuestNotes.js";
import { StyledList } from "@/styles/StyledList.js";
import Date from "@/components/Date.js";

const Map = dynamic(() => import("@/components/Map.js"), { ssr: false });

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

export default function QuestDetails() {
  const { quests } = useQuests();
  const dispatch = useQuestsDispatch();

  const router = useRouter();
  const { id } = router.query;
  const selectedQuest = quests.find((quest) => quest.id === id);

  if (!selectedQuest) {
    return null;
  }

  const hasLocation =
    selectedQuest.location &&
    Object.keys(selectedQuest.location).every((value) => value !== "");

  function handleDelete() {
    dispatch({ type: "deleteQuest", questID: selectedQuest.id });
    router.back();
  }

  return (
    <Article>
      <FlexContainer>
        <BackButton />

        <QuestLabels labels={selectedQuest.labels} size={"5rem"} />
      </FlexContainer>
      <GridContainer>
        {selectedQuest.dateSelected && !selectedQuest.dateFinished && (
          <p>
            <strong>Note:</strong> You did not finish this quest. You should
            solve it as soon as possible to defeat the Questicator!
          </p>
        )}
        <h2>{selectedQuest.title}</h2>
        <p>{selectedQuest.description}</p>
        {selectedQuest.dateSelected && (
          <p>
            You selected this quest on <Date day={selectedQuest.dateSelected} />
            .
          </p>
        )}
        {selectedQuest.dateSelected && selectedQuest.dateFinished && (
          <p>
            You finished this quest on <Date day={selectedQuest.dateFinished} />
            .
          </p>
        )}

        {selectedQuest.notes && <QuestNotes notes={selectedQuest.notes} />}
        {hasLocation && (
          <>
            <h3>Location:</h3>
            <StyledList>
              <li>{selectedQuest.location.locationName}</li>
              <li>{`${selectedQuest.location.street} ${selectedQuest.location.streetNumber}`}</li>
              <li>{`${selectedQuest.location.postalCode} ${selectedQuest.location.place}`}</li>
            </StyledList>
            {selectedQuest.location.latitude &&
              selectedQuest.location.longitude && (
                <Map
                  location={selectedQuest.location}
                  questId={selectedQuest.id}
                />
              )}
          </>
        )}
      </GridContainer>
      <GridContainer>
        <p>
          {selectedQuest.isDone
            ? "You solved this quest."
            : " You have not solved this quest yet."}
        </p>
        <StyledButton
          type="button"
          onClick={() =>
            dispatch({ type: "updateQuestStatus", questId: selectedQuest.id })
          }
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
