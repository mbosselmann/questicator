import { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Checked from "../assets/Icons/Checked.js";
import NotChecked from "../assets/Icons/NotChecked.js";
import { ScreenReaderOnly } from "../styles/ScreenReaderOnly.js";

const CheckboxInput = styled.input`
  display: none;
`;

const Wrapper = styled.form`
  height: 100%;
  position: relative;
  display: grid;
  place-items: center;
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
`;

export default function CheckBoxForm({ isDone, updateQuestStatus }) {
  const [isChecked, setIsChecked] = useState(isDone);

  const [id, setId] = useState("");

  useEffect(() => {
    setId("isDone" + uuidv4());
  }, []);

  function handleOnChange() {
    setIsChecked(!isChecked);
    updateQuestStatus();
  }

  return (
    <Wrapper
      aria-label={
        isChecked
          ? "click if quest is not solved yet"
          : "click if quest is solved"
      }
    >
      <CheckboxInput
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <Label htmlFor={id}>
        {isChecked ? <Checked /> : <NotChecked />}
        <ScreenReaderOnly>
          {isChecked ? "solved" : "not solved yet"}
        </ScreenReaderOnly>
      </Label>
    </Wrapper>
  );
}
