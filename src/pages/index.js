import styled, { keyframes } from "styled-components";

import Questicator from "@/assets/Icons/Questicator.js";
import { StyledLink } from "@/styles/StyledLink.js";

export default function Home() {
  return (
    <Wrapper>
      <>
        <Slide>
          <Questicator width="250px" height="250px" />
        </Slide>
        <h2>Oh no! The Questicator has appeared!</h2>
        <p>
          You need to defeat this powerful creature. Solve three quests from the
          list above to win against the Questicator. Which of the following
          quests do you want to choose?
        </p>
        <StyledLink href="/availablequests">Choose quests</StyledLink>
      </>
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
