import Questicator from "@/assets/Icons/Questicator.js";
import QuestList from "@/components/QuestList.js";

export default function Home({ quests, updateQuestStatus }) {
  const unsolvedQuests = quests.filter(({ isDone }) => !isDone);

  if (unsolvedQuests.length === 0) {
    return <p>No open quests yet.</p>;
  }

  return (
    <>
      <h2>Unsolved Quests</h2>
      <QuestList
        quests={unsolvedQuests}
        updateQuestStatus={updateQuestStatus}
      />
      <div style={{ justifySelf: "center" }}>
        <Questicator width="150px" height="150px" />
      </div>
    </>
  );
}
