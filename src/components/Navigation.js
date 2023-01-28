import { useRouter } from "next/router";
import Link from "next/link.js";
import styled, { css } from "styled-components";
import Done from "./Icons/Done.js";
import Scroll from "./Icons/Scroll.js";
import { ScreenReaderOnly } from "./ScreenReaderOnly.js";
import Plus from "./Icons/Plus.js";

const NavBar = styled.nav`
  background-color: var(--dark-bg-color);
  display: flex;
  justify-content: space-between;
  border-top: 5px solid #3e2c41;
`;

const StyledLink = styled(Link)`
  height: 100%;
  flex-grow: 1;
  color: var(--text-color);
  background-color: ${({ active }) => (active ? "#3E2C41" : "transparent")};
  text-decoration: none;
  display: grid;
  place-items: center;
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <NavBar>
      <StyledLink href="/" active={router.pathname === "/" ? "active" : ""}>
        <Scroll />
        <ScreenReaderOnly>In Progress</ScreenReaderOnly>
      </StyledLink>
      <StyledLink
        href="/addquest"
        active={router.pathname === "/addquest" ? "active" : ""}
      >
        <Plus />
        <ScreenReaderOnly>Add Quest</ScreenReaderOnly>
      </StyledLink>
      <StyledLink
        href="/solvedquests"
        active={router.pathname === "/solvedquests" ? "active" : ""}
      >
        <Done />
        <ScreenReaderOnly>Solved</ScreenReaderOnly>
      </StyledLink>
    </NavBar>
  );
}
