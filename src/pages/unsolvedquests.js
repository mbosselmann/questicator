import QuestList from "@/components/QuestList.js";
import QuesticatorDefeated from "@/assets/Icons/QuesticatorDefeated.js";
import { Slide } from "@/styles/Slide.js";
import { FlexWrapper } from "@/styles/FlexWrapper.js";
import { useQuests } from "@/context.js";
import Date from "@/components/Date.js";

export default function UnsolvedQuests() {
  const { selectedQuests } = useQuests();

  if (selectedQuests.length === 0) {
    return (
      <p>
        No open quests yet for today. Choose your daily quests to conquer the
        Questicator!
      </p>
    );
  }

  if (selectedQuests.filter(({ isDone }) => isDone).length === 3) {
    return (
      <FlexWrapper>
        <Slide>
          <QuesticatorDefeated width="250px" height="250px" />
        </Slide>
        <p>
          Yay! You solved all three quests for today. The Questicator is
          defeated!
        </p>
      </FlexWrapper>
    );
  }

  return (
    <>
      <h2>
        Unsolved Quests <Date />
      </h2>
      <QuestList
        quests={selectedQuests.filter(({ isDone }) => !isDone)}
        displayCheckbox
      />
    </>
  );
}
