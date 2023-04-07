import Questicator from "@/assets/Icons/Questicator.js";
import { StyledLink } from "@/styles/StyledLink.js";
import { Slide } from "@/styles/Slide.js";
import { FlexWrapper } from "@/styles/FlexWrapper.js";
import { StyledButton } from "@/styles/StyledButton.js";
import { useQuests, useQuestsDispatch } from "@/context.js";

export default function Home() {
  const { selectedQuests } = useQuests();
  const dispatch = useQuestsDispatch();

  const amountOfSolvedQuests =
    3 - selectedQuests?.filter(({ isDone }) => !isDone).length;
  const motivationalMessages = ["Work hard!", "You can do it!", "Go for it!"];

  return (
    <FlexWrapper>
      <>
        <Slide>
          <Questicator width="250px" height="250px" />
        </Slide>
        {selectedQuests.length > 0 ? (
          <>
            <p>
              You already chose three quests to conquer the Questicator. You
              solved {amountOfSolvedQuests} out of 3 quests.{" "}
              {motivationalMessages[amountOfSolvedQuests]}
              Come back tomorrow to solve more quests.
            </p>
            {amountOfSolvedQuests !== 3 && (
              <StyledLink href="/unsolvedquests">
                View unsolved quests
              </StyledLink>
            )}
            <StyledButton
              type="button"
              onClick={() => dispatch({ type: "deleteChosenQuestIds" })}
            >
              Reset my progress
            </StyledButton>
          </>
        ) : (
          <>
            <h2>Oh no! The Questicator has appeared!</h2>
            <p>
              You need to defeat this powerful creature. Solve three quests from
              the list above to win against the Questicator. Which of the
              following quests do you want to choose?
            </p>
            <StyledLink href="/availablequests">Choose quests</StyledLink>
          </>
        )}
      </>
    </FlexWrapper>
  );
}
