import QuestList from "@/components/QuestList.js";
import { useQuests } from "@/context.js";

export default function SolvedQuests() {
  const { solvedQuests } = useQuests();
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
      <QuestList quests={solvedQuests} displayCheckbox />
    </>
  );
}
