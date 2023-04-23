import { useRouter } from "next/router.js";
import { useQuests, useQuestsDispatch } from "@/context.js";

import useQuestLabels from "@/lib/hooks/useQuestLabels.js";

import QuestForm from "@/components/QuestForm/QuestForm.js";
import FormHeader from "@/components/FormHeader/FormHeader.js";
import BackButton from "@/components/BackButton/BackButton.js";

export default function EditQuest() {
  const { quests } = useQuests();
  const dispatch = useQuestsDispatch();

  const router = useRouter();
  const { id } = router.query;
  const selectedQuest = quests.find((quest) => quest.id === id);

  const [questLabels, handleQuestLabels] = useQuestLabels(
    selectedQuest?.labels
  );

  const editQuestId = "edit-quest-form";

  if (!selectedQuest) {
    return null;
  }

  function onSubmit(updatedQuestData) {
    const updatedQuest = {
      id: selectedQuest.id,
      ...updatedQuestData,
      labels: questLabels || selectedQuest.labels,
      isDone: selectedQuest.isDone,
    };
    dispatch({ type: "editQuest", updatedQuest });
    router.back();
  }

  return (
    <>
      <BackButton />
      <FormHeader
        title="Add a Quest"
        questLabels={questLabels || selectedQuest.labels}
        ariaLabelledbyId={editQuestId}
      />
      <QuestForm
        onSubmit={onSubmit}
        onDisplayQuestLabels={handleQuestLabels}
        selectedQuest={selectedQuest}
        ariaLabelledbyId={editQuestId}
      />
    </>
  );
}
