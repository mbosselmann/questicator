import Link from "next/link.js";
import styled from "styled-components";
import Form from "./Form.js";
import QuestLabels from "./QuestLabels.js";
import { ScreenReaderOnly } from "./ScreenReaderOnly.js";
ScreenReaderOnly;

const Article = styled.article`
  background-color: var(--light-bg-color);
  padding: 0.5rem;
  border-left: 0.5rem dashed var(--border-color);
  border-right: 0.5rem dashed var(--border-color);
  position: relative;
  display: flex;
`;

const StyledLink = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const FormContainer = styled.div`
  width: fit-content;
  display: flex;
  isolation: isolate;
  z-index: 1;
`;

export default function Quest({
  id,
  title,
  labels,
  isDone,
  updateQuestStatus,
}) {
  return (
    <Article>
      <FormContainer>
        <Form isDone={isDone} updateQuestStatus={updateQuestStatus} />
      </FormContainer>
      <h2>{title}</h2>
      <QuestLabels labels={labels} />
      <Link href={`${id}`} passHref legacyBehavior>
        <StyledLink>
          <ScreenReaderOnly>quest details</ScreenReaderOnly>
        </StyledLink>
      </Link>
    </Article>
  );
}
