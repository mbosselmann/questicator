import QuestList from "@/components/QuestList.js";

export default function SolvedQuests({ solvedQuests, updateQuestStatus }) {
  if (solvedQuests.length === 0) {
    return (
      <p>
        No solved quests yet. Try to solve your daily quests to defeat the
        Questicator!
      </p>
    );
  }

  return (
    <>
      <h2>Solved Quests</h2>
      <QuestList
        quests={solvedQuests}
        updateQuestStatus={updateQuestStatus}
        displayCheckbox
      />
    </>
  );
}
