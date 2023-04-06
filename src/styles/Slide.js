import styled, { keyframes } from "styled-components";

const slide = keyframes`

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }`;

export const Slide = styled.div`
  display: grid;
  animation: 4s ${slide};
  place-items: center;
`;
