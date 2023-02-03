import QuestList from "@/components/QuestList.js";

export default function SolvedQuests({ quests, updateQuestStatus }) {
  const solvedQuests = quests.filter(({ isDone }) => isDone);

  if (solvedQuests.length === 0) {
    return <p>No solved quests yet.</p>;
  }

  return (
    <>
      <h2>Solved Quests</h2>
      <QuestList quests={solvedQuests} updateQuestStatus={updateQuestStatus} />
    </>
  );
}
