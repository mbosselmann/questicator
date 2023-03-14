import Quest from "@/components/Quest.js";
import { StyledList } from "@/styles/StyledList.js";

export default function QuestList({
  quests,
  updateQuestStatus,
  displayCheckbox,
  chosenQuestIds,
  updateChosenQuestIds,
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
            updateQuestStatus={() => updateQuestStatus(quest.id)}
            displayCheckbox={displayCheckbox}
            isSelected={chosenQuestIds?.find(
              (chosenQuestId) => chosenQuestId === quest.id
            )}
            updateChosenQuestIds={() => updateChosenQuestIds(quest.id)}
            chosenQuestIdsLength={chosenQuestIds?.length}
          />
        </li>
      ))}
    </StyledList>
  );
}
