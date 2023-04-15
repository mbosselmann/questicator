import Link from "next/link.js";
import styled from "styled-components";
import CheckboxForm from "./CheckboxForm/CheckboxForm.js";
import QuestLabels from "./QuestLabels/QuestLabels.js";
import { ScreenReaderOnly } from "../styles/ScreenReaderOnly.js";
import { StyledButton } from "@/styles/StyledButton.js";
import { useQuestsDispatch } from "@/context.js";

const Article = styled.article`
  height: 100%;
  padding: 0.5rem;
  background-color: var(--light-bg-color);
  border-left: 0.5rem dashed var(--border-color);
  border-right: 0.5rem dashed var(--border-color);
  ${({ isSelected }) =>
    isSelected && "box-shadow: 0 0 15px var(--highlighted);"}
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
`;

const StyledHiddenLink = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({ displayCheckbox }) => (displayCheckbox ? "0" : "100px")};
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

const Heading = styled.h3`
  font-size: 1rem;
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
  displayCheckbox,
  isSelected = false,
  chosenQuestIdsLength,
}) {
  const dispatch = useQuestsDispatch();

  return (
    <Article isSelected={isSelected}>
      <FlexContainer>
        <Section>
          {displayCheckbox ? (
            <FormContainer>
              <CheckboxForm
                isDone={isDone}
                updateQuestStatus={() =>
                  dispatch({ type: "updateQuestStatus", questId: id })
                }
              />
            </FormContainer>
          ) : (
            <StyledButton
              type="button"
              onClick={() =>
                dispatch({ type: "updateChosenQuestIds", questId: id })
              }
              disabled={!isSelected && chosenQuestIdsLength >= 3}
            >
              {isSelected ? "Remove" : "Select"}
            </StyledButton>
          )}
          <Heading>{title}</Heading>
        </Section>
        <div>
          <QuestLabels labels={labels} />
          <Link href={`/${id}`} passHref legacyBehavior>
            <StyledHiddenLink displayCheckbox={displayCheckbox}>
              <ScreenReaderOnly>quest details</ScreenReaderOnly>
            </StyledHiddenLink>
          </Link>
        </div>
      </FlexContainer>
    </Article>
  );
}
