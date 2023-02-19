import { data } from "db.js";
import { useImmerLocalStorageState } from "@/lib/hooks/useImmerLocalStorageState.js";

import Layout from "@/styles/Layout.js";
import GlobalStyle from "../style.js";

export default function App({ Component, pageProps }) {
  const [quests, setQuests] = useImmerLocalStorageState("quests", {
    defaultValue: data,
  });

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
      />
    </Layout>
  );
}
