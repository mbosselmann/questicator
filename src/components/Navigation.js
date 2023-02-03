import { useRouter } from "next/router";
import Link from "next/link.js";
import styled from "styled-components";
import Done from "../assets/Icons/Done.js";
import Scroll from "../assets/Icons/Scroll.js";
import { ScreenReaderOnly } from "../styles/ScreenReaderOnly.js";
import Plus from "../assets/Icons/Plus.js";

const NavBar = styled.nav`
  background-color: var(--dark-bg-color);
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  height: 100%;
  flex-grow: 1;
  color: var(--text-color);
  background-color: ${({ active }) =>
    active ? "var(--light-bg-color)" : "transparent"};
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
