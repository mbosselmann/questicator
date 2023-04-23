import styled from "styled-components";

import QuestLabels from "../QuestLabels/index.js";
import { StyledTitle } from "../../styles/StyledTitle.js";

const Header = styled.header`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function FormHeader({ title, questLabels, ariaLabelledbyId }) {
  return (
    <Header>
      <StyledTitle id={ariaLabelledbyId}>{title}</StyledTitle>
      {questLabels && <QuestLabels labels={questLabels} size={"3rem"} />}
    </Header>
  );
}
