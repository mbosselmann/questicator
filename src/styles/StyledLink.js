import styled from "styled-components";
import Link from "next/link.js";

export const StyledLink = styled(Link)`
  background-color: var(--highlighted);
  padding: 0.5rem;
  text-decoration: none;
  color: white;
  border-radius: 0.3rem;
  text-align: center;
  font-weight: bold;
`;
