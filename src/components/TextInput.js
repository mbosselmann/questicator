import styled from "styled-components";

const Wrapper = styled.p`
  display: grid;
  gap: 0.3rem;
  margin: 0;
`;

const Input = styled.input`
  padding: 0.4rem;
  border-radius: 0.3rem;
  border: none;
  font-family: inherit;
  font-size: 1rem;

  &:focus {
    outline: 3px solid var(--highlighted);
  }
`;

export default function TextInput({
  id,
  name,
  labelText,
  type,
  defaultValue,
  required,
}) {
  return (
    <Wrapper>
      <label htmlFor={id}>{labelText}</label>
      <Input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
      />
    </Wrapper>
  );
}
