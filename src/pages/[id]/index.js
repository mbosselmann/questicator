import styled from "styled-components";
import { useRouter } from "next/router.js";
import Link from "next/link.js";

import Form from "@/components/Form.js";
import Back from "@/components/Icons/Back.js";
import QuestLabels from "@/components/QuestLabels.js";
import { Underline } from "@/components/Underline.js";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  width: fit-content;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Article = styled.article`
  background-color: var(--light-bg-color);
  padding: 0.5rem;
  height: 100%;
`;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

export default function QuestDetails({ quests, updateQuestStatus }) {
  const router = useRouter();
  const { id } = router.query;
  const selectedQuest = quests.find((quest) => quest.id === id);

  if (!selectedQuest) {
    return null;
  }

  return (
    <Article>
      <Container>
        <Link href="/" passHref legacyBehavior>
          <StyledLink>
            <Back /> <Underline>back</Underline>
          </StyledLink>
        </Link>
        <QuestLabels labels={selectedQuest.labels} size={"5rem"} />
      </Container>
      <h2>{selectedQuest.title}</h2>
      <p>{selectedQuest.description}</p>
      <Form
        isDone={selectedQuest.isDone}
        updateQuestStatus={() => updateQuestStatus(selectedQuest.id)}
      />
    </Article>
  );
}
