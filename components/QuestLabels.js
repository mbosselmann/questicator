import styled from "styled-components";
import Cauldron from "./Icons/Cauldron.js";
import High from "./Icons/High.js";
import Low from "./Icons/Low.js";
import Star from "./Icons/Star.js";
import Wizard from "./Icons/Wizard.js";

const LABELS_MAP = {
  practice: <Wizard />,
  discovery: <Cauldron />,
  protect: <Star />,
  "low-priority": <Low />,
  "high-priority": <High />,
};

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;

const ListItem = styled.li`
  & * {
    width: ${({ size }) => (size ? size : "2.5rem")};
    height: ${({ size }) => (size ? size : "2.5rem")};
  }
`;

export default function QuestLabels({ labels, size }) {
  return (
    <List role="list">
      {labels.map(({ id, name }) => (
        <ListItem key={id} size={size}>
          {LABELS_MAP[name]}
        </ListItem>
      ))}
    </List>
  );
}
