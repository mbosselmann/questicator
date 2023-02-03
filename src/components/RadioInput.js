import styled from "styled-components";
import Radio from "../assets/Icons/Radio.js";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export default function RadioInput({
  id,
  value,
  name,
  onChange,
  labelText,
  required,
  isChecked,
}) {
  return (
    <>
      <Input
        type="radio"
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        checked={isChecked}
      />
      <Label htmlFor={id}>
        <Radio isChecked={isChecked} /> {labelText}
      </Label>
    </>
  );
}
