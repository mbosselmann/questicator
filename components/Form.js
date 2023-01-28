import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Underline } from "./Underline.js";

export default function Form({ isDone, updateQuestStatus }) {
  const [isChecked, setIsChecked] = useState(isDone);
  const id = "isDone" + uuidv4();

  function handleOnChange() {
    setIsChecked(!isChecked);
    updateQuestStatus();
  }

  return (
    <form aria-label="track if quest is done">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label htmlFor={id}>
        <Underline>{isChecked ? "completed" : "not completed yet"}</Underline>
      </label>
    </form>
  );
}
