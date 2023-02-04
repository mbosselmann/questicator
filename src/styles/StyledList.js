import styled from "styled-components";

export const StyledList = styled.ul.attrs(() => ({
  role: "list",
}))`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.8rem;
  margin: 0;
`;
