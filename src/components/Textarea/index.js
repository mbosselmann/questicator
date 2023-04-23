import styled from "styled-components";

const Wrapper = styled.p`
  display: grid;
  gap: 0.3rem;
  margin: 0;
`;

const StyledTextarea = styled.textarea`
  padding: 0.4rem;
  border-radius: 0.3rem;
  border: none;
  font-family: inherit;

  &:focus {
    outline: 3px solid var(--highlighted);
  }
`;

export default function Textarea({
  id,
  name,
  labelText,
  defaultValue,
  required,
}) {
  return (
    <Wrapper>
      <label htmlFor={id}>{labelText}</label>
      <StyledTextarea
        id={id}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required={required}
      ></StyledTextarea>
    </Wrapper>
  );
}
