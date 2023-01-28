import { data } from "db.js";
import { useImmerLocalStorageState } from "lib/hook/useImmerLocalStorageState.js";
import Layout from "components/Layout.js";
import GlobalStyle from "../styles.js";

export default function App({ Component, pageProps }) {
  const [quests, setQuests] = useImmerLocalStorageState("quests", {
    defaultValue: [],
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

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        quests={quests}
        updateQuestStatus={updateQuestStatus}
      />
    </Layout>
  );
}
