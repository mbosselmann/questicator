import Questicator from "@/assets/Icons/Questicator.js";
import QuestList from "@/components/QuestList.js";

export default function Home({ unsolvedQuests, updateQuestStatus }) {
  if (unsolvedQuests.length === 0) {
    return <p>No open quests yet.</p>;
  }

  return (
    <>
      <h2>Unsolved Quests</h2>
      <QuestList
        quests={unsolvedQuests}
        updateQuestStatus={updateQuestStatus}
        displayCheckbox
      />
    </>
  );
}
