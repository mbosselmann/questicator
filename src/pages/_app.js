import { useState } from "react";
import { data } from "db.js";
import { useImmerLocalStorageState } from "lib/hook/useImmerLocalStorageState.js";
import { v4 as uuidv4 } from "uuid";

import Layout from "@/styles/Layout.js";
import GlobalStyle from "../styles.js";

export default function App({ Component, pageProps }) {
  const [quests, setQuests] = useImmerLocalStorageState("quests", {
    defaultValue: data,
  });
  const [newQuestLabels, setNewQuestLabels] = useState(null);

  function updateQuestStatus(questId) {
    if (quests) {
      setQuests(
        quests.map((quest) =>
          quest.id === questId ? { ...quest, isDone: !quest.isDone } : quest
        )
      );
    } else {
      setQuests(
        data.map((quest) =>
          quest.id === questId ? { ...quest, isDone: !quest.isDone } : quest
        )
      );
    }
  }

  function addQuest(newQuest) {
    setQuests([newQuest, ...quests]);
  }

  function editQuest(updatedQuest) {
    setQuests(
      quests.map((quest) =>
        quest.id === updatedQuest.id ? updatedQuest : quest
      )
    );
  }

  function deleteQuest(questId) {
    setQuests(quests.filter((quest) => quest.id !== questId));
  }

  function handleDisplayQuestLabels(labelName, labelValue) {
    if (!newQuestLabels) {
      if (labelName === "kindOfQuest") {
        return setNewQuestLabels([
          { id: uuidv4(), name: labelValue },
          { id: uuidv4(), name: "none" },
        ]);
      } else {
        return setNewQuestLabels([
          { id: uuidv4(), name: "none" },
          { id: uuidv4(), name: labelValue },
        ]);
      }
    }

    if (labelName === "kindOfQuest") {
      setNewQuestLabels(
        { ...newQuestLabels[0], name: labelValue },
        newQuestLabels[1]
      );
    }

    if (labelName === "priority") {
      setNewQuestLabels(newQuestLabels[0], {
        ...newQuestLabels[1],
        name: labelValue,
      });
    }
  }

  function addNote(note, questId) {
    setQuests(
      quests.map((quest) =>
        quest.id === questId
          ? { ...quest, notes: quest.notes ? [note, ...quest.notes] : [note] }
          : quest
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        quests={quests}
        updateQuestStatus={updateQuestStatus}
        addQuest={addQuest}
        editQuest={editQuest}
        deleteQuest={deleteQuest}
        addNote={addNote}
        newQuestLabels={newQuestLabels}
        onDisplayQuestLabels={handleDisplayQuestLabels}
      />
    </Layout>
  );
}
