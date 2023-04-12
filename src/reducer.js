const today = new Date().toDateString();

console.log(today);

export default function questsReducer(state, action) {
  switch (action.type) {
    case "initialize": {
      return action.initialState;
    }
    case "addQuest": {
      return {
        chosenQuestIds: state.chosenQuestIds,
        quests: [action.quest, ...state.quests],
      };
    }
    case "editQuest": {
      return {
        chosenQuestIds: state.chosenQuestIds,
        quests: state.quests.map((quest) =>
          quest.id === action.updatedQuest.id ? action.updatedQuest : quest
        ),
      };
    }
    case "deleteQuest": {
      return {
        chosenQuestIds: state.chosenQuestIds,
        quests: state.quests.filter((quest) => quest.id !== action.questId),
      };
    }
    case "updateQuestStatus": {
      return {
        chosenQuestIds: state.chosenQuestIds,
        quests: state.quests.map((quest) =>
          quest.id === action.questId
            ? { ...quest, isDone: !quest.isDone }
            : quest
        ),
      };
    }
    case "addNote": {
      return {
        chosenQuestIds: state.chosenQuestIds,
        quests: state.quests.map((quest) =>
          quest.id === action.questId
            ? {
                ...quest,
                notes: quest.notes
                  ? [action.note, ...quest.notes]
                  : [action.note],
              }
            : quest
        ),
      };
    }
    case "deleteChosenQuestIds": {
      return { quests: state.quests, chosenQuestIds: [] };
    }
    case "updateChosenQuestIds": {
      const selectedQuest = state.quests.find(
        (quest) => quest.id === action.questId
      );

      if (
        state.chosenQuestIds.some(
          (chosenQuestId) => chosenQuestId === selectedQuest.id
        )
      ) {
        return {
          chosenQuestIds: state.chosenQuestIds.filter(
            (chosenQuestId) => chosenQuestId !== selectedQuest.id
          ),
          quests: state.quests.map((quest) =>
            quest.id === action.questId
              ? { ...quest, dateSelected: today }
              : quest
          ),
        };
      } else {
        return {
          chosenQuestIds: [...state.chosenQuestIds, selectedQuest.id],
          quests: state.quests.map((quest) =>
            quest.id === action.questId
              ? { ...quest, dateSelected: today }
              : quest
          ),
        };
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
