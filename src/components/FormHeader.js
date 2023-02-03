import styled from "styled-components";

import QuestLabels from "./QuestLabels.js";

const Title = styled.h2`
  margin: 0 0 0.8rem;
`;

const Header = styled.header`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function FormHeader({ title, questLabels }) {
  return (
    <Header>
      <Title>{title}</Title>
      {questLabels && <QuestLabels labels={questLabels} size={"3rem"} />}
    </Header>
  );
}
