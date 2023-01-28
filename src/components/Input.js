import styled from "styled-components";

const Wrapper = styled.p`
  display: grid;
  gap: 0.3rem;
`;

export default function Input({
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
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
      />
    </Wrapper>
  );
}
