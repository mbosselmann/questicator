import { data } from "../db.js";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useImmerLocalStorageState } from "./lib/hooks/useImmerLocalStorageState.js";
import questsReducer from "@/reducer.js";

const QuestsContext = createContext();
const QuestsDispatchContext = createContext();

const today = new Date().toDateString();

console.log(today);

export function QuestsProvider({ children }) {
  const [storagedQuests, setStoragedQuests] = useImmerLocalStorageState(
    "quests",
    { defaultValue: data }
  );

  const [storagedChosenQuestIds, setStoragedChosenQuestIds] =
    useImmerLocalStorageState("chosenQuestIds", { defaultValue: [] });

  const initialState = {
    quests: storagedQuests,
    chosenQuestIds: storagedChosenQuestIds,
  };

  const [{ quests, chosenQuestIds }, dispatch] = useReducer(
    questsReducer,
    initialState
  );

  useEffect(() => {
    if (quests !== initialState.quests) {
      setStoragedQuests(quests);
    }
  }, [quests, initialState.quests, setStoragedQuests]);

  useEffect(() => {
    if (chosenQuestIds !== initialState.chosenQuestIds) {
      setStoragedChosenQuestIds(chosenQuestIds);
    }
  }, [chosenQuestIds, initialState.chosenQuestIds, setStoragedChosenQuestIds]);

  const value = {
    quests,
    chosenQuestIds,
    selectedQuests: quests.filter((quest) =>
      chosenQuestIds.find((chosenQuestId) => chosenQuestId === quest.id)
    ),
    solvedQuests: quests.filter(({ isDone }) => isDone),
    unsolvedQuests: quests.filter(({ isDone }) => !isDone),
  };

  return (
    <QuestsContext.Provider value={value}>
      <QuestsDispatchContext.Provider value={dispatch}>
        {children}
      </QuestsDispatchContext.Provider>
    </QuestsContext.Provider>
  );
}

export function useQuests() {
  return useContext(QuestsContext);
}

export function useQuestsDispatch() {
  return useContext(QuestsDispatchContext);
}
