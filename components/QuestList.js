import Quest from "components/Quest.js";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0 0 1rem 0;
  display: grid;
  gap: 0.8rem;
  margin: 0;
`;

export default function QuestList({ quests, updateQuestStatus }) {
  return (
    <List role="list">
      {quests.map((quest) => (
        <li key={quest.id}>
          <Quest
            id={quest.id}
            title={quest.title}
            labels={quest.labels}
            isDone={quest.isDone}
            updateQuestStatus={() => updateQuestStatus(quest.id)}
          />
        </li>
      ))}
    </List>
  );
}
