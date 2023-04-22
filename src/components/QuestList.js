import Quest from "@/components/Quest/Quest.js";
import { useQuests } from "@/context.js";
import { StyledList } from "@/styles/StyledList.js";

export default function QuestList({
  quests,
  displayCheckbox,
  chosenQuestIds = [],
}) {
  return (
    <StyledList>
      {quests.map((quest) => (
        <li key={quest.id}>
          <Quest
            id={quest.id}
            title={quest.title}
            labels={quest.labels}
            isDone={quest.isDone}
            displayCheckbox={displayCheckbox}
            isSelected={chosenQuestIds?.find(
              (chosenQuestId) => chosenQuestId === quest.id
            )}
            chosenQuestIdsLength={chosenQuestIds?.length}
          />
        </li>
      ))}
    </StyledList>
  );
}
