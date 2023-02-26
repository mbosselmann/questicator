import styled, { keyframes } from "styled-components";

import Questicator from "@/assets/Icons/Questicator.js";
import QuestList from "@/components/QuestList.js";
import { StyledButton } from "@/styles/StyledButton.js";
import { useState } from "react";

export default function Home({ unsolvedQuests, updateQuestStatus }) {
  const [chosenQuests, setChosenQuests] = useState([]);

  return (
    <Wrapper>
      <Questicator width="250px" height="250px" />
      <Slide>
        <h2>Oh no! The Questicator has appeared!</h2>
        <p>
          You need to defeat this powerful creature. Solve three quests from the
          list above to win against the Questicator. Which of the following
          quests do you want to choose?
        </p>
        <StyledButton type="button">Choose quests</StyledButton>
      </Slide>

      <h2>Available Quests</h2>
      <p>Number of choosen quests: {chosenQuests.length}</p>
      <QuestList
        quests={unsolvedQuests}
        updateQuestStatus={updateQuestStatus}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const slide = keyframes`

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }`;

const Slide = styled.div`
  display: grid;
  animation: 4s ${slide};
`;
