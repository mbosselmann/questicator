import QuestList from "@/components/QuestList.js";

export default function Home({ selectedQuests, updateQuestStatus }) {
  if (selectedQuests.length === 0) {
    return <p>No open quests yet.</p>;
  }

  return (
    <>
      <h2>Unsolved Quests</h2>
      <QuestList
        quests={selectedQuests}
        updateQuestStatus={updateQuestStatus}
        displayCheckbox
      />
    </>
  );
}
