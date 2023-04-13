import { data } from "../db.js";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";
import { useImmerLocalStorageState } from "./lib/hooks/useImmerLocalStorageState.js";
import questsReducer from "@/reducer.js";

const QuestsContext = createContext();
const QuestsDispatchContext = createContext();

export function QuestsProvider({ children }) {
  const [storagedQuests, setStoragedQuests] = useImmerLocalStorageState(
    "quests",
    { defaultValue: data }
  );

  const [storagedChosenQuestIds, setStoragedChosenQuestIds] =
    useImmerLocalStorageState("chosenQuestIds", { defaultValue: [] });

  const [today, setToday] = useImmerLocalStorageState("today", {
    defaultValue: new Date().toDateString(),
  });

  const initialState = useMemo(() => {
    return {
      quests: storagedQuests,
      chosenQuestIds: storagedChosenQuestIds,
      isInitial: true,
    };
  }, [storagedChosenQuestIds, storagedQuests]);

  const [{ quests, chosenQuestIds, isInitial }, dispatch] = useReducer(
    questsReducer,
    initialState
  );

  useEffect(() => {
    dispatch({
      type: "initialize",
      initialState,
    });
  }, [storagedChosenQuestIds, storagedQuests, initialState]);

  useEffect(() => {
    if (!isInitial) {
      setStoragedQuests(quests);
      setStoragedChosenQuestIds(chosenQuestIds);
    }
  }, [
    chosenQuestIds,
    quests,
    isInitial,
    setStoragedQuests,
    setStoragedChosenQuestIds,
  ]);

  const value = {
    today,
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
