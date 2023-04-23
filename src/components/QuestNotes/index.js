import { StyledList } from "../../styles/StyledList.js";

export default function QuestNotes({ notes }) {
  return (
    <>
      <h3>Your notes:</h3>
      <StyledList>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </StyledList>
    </>
  );
}
