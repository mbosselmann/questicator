import QuestList from "components/QuestList.js";

export default function Home({ quests, updateQuestStatus }) {
  const unsolvedQuests = quests.filter(({ isDone }) => !isDone);

  if (unsolvedQuests.length === 0) {
    return <p>No open quests yet.</p>;
  }

  return (
    <QuestList quests={unsolvedQuests} updateQuestStatus={updateQuestStatus} />
  );
}
