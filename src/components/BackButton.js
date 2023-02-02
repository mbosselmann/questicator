import styled from "styled-components";
import { useRouter } from "next/router.js";

import Back from "../assets/Icons/Back.js";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  width: fit-content;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
`;

const Underline = styled.span`
  border-bottom: 5px solid var(--border-color);
`;

export default function BackButton() {
  const router = useRouter();

  return (
    <Button type="button" onClick={() => router.back()} aria-label="back">
      <Back /> <Underline>back</Underline>
    </Button>
  );
}
