import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useQuestLabels(initialValue = null) {
  const [questLabels, setQuestLabels] = useState(initialValue);

  function handleQuestLabels(labelName, labelValue) {
    if (!questLabels) {
      if (labelName === "kindOfQuest") {
        return setQuestLabels([
          { id: uuidv4(), name: labelValue },
          { id: uuidv4(), name: "none" },
        ]);
      } else {
        return setQuestLabels([
          { id: uuidv4(), name: "none" },
          { id: uuidv4(), name: labelValue },
        ]);
      }
    }

    if (labelName === "kindOfQuest") {
      setQuestLabels([{ ...questLabels[0], name: labelValue }, questLabels[1]]);
    }

    if (labelName === "priority") {
      setQuestLabels([
        questLabels[0],
        {
          ...questLabels[1],
          name: labelValue,
        },
      ]);
    }
  }

  return [questLabels, handleQuestLabels];
}
