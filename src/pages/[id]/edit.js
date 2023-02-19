import { useRouter } from "next/router.js";

import useQuestLabels from "@/lib/hooks/useQuestLabels.js";

import QuestForm from "@/components/QuestForm.js";
import FormHeader from "@/components/FormHeader.js";
import BackButton from "@/components/BackButton.js";

export default function EditQuest({ quests, editQuest }) {
  const router = useRouter();
  const { id } = router.query;
  const selectedQuest = quests.find((quest) => quest.id === id);

  const [questLabels, handleQuestLabels] = useQuestLabels(
    selectedQuest?.labels
  );

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
    editQuest(updatedQuest);
    router.back();
  }

  return (
    <>
      <BackButton />
      <FormHeader
        title="Add a Quest"
        questLabels={questLabels || selectedQuest.labels}
      />
      <QuestForm
        onSubmit={onSubmit}
        onDisplayQuestLabels={handleQuestLabels}
        selectedQuest={selectedQuest}
      />
    </>
  );
}
