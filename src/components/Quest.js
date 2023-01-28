import Link from "next/link.js";
import styled from "styled-components";
import Form from "./Form.js";
import QuestLabels from "./QuestLabels.js";
import { ScreenReaderOnly } from "./ScreenReaderOnly.js";
ScreenReaderOnly;

const Article = styled.article`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: var(--light-bg-color);
  border-left: 0.5rem dashed var(--border-color);
  border-right: 0.5rem dashed var(--border-color);
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
  width: 1.5rem;
  height: 100%;
  display: flex;
  isolation: isolate;
  z-index: 1;
`;

const Heading = styled.h2`
  font-size: 1.2rem;
`;

const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
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
      <Section>
        <FormContainer>
          <Form isDone={isDone} updateQuestStatus={updateQuestStatus} />
        </FormContainer>
        <Heading>{title}</Heading>
      </Section>
      <div>
        <QuestLabels labels={labels} />
        <Link href={`${id}`} passHref legacyBehavior>
          <StyledLink>
            <ScreenReaderOnly>quest details</ScreenReaderOnly>
          </StyledLink>
        </Link>
      </div>
    </Article>
  );
}
