import styled from "styled-components";

import QuestLabels from "../QuestLabels/QuestLabels.js";
import { StyledTitle } from "../../styles/StyledTitle.js";

const Header = styled.header`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function FormHeader({ title, questLabels }) {
  return (
    <Header>
      <StyledTitle>{title}</StyledTitle>
      {questLabels && <QuestLabels labels={questLabels} size={"3rem"} />}
    </Header>
  );
}
