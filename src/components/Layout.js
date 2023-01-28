import localFont from "@next/font/local";
import styled from "styled-components";
import Navigation from "./Navigation.js";

const risque = localFont({ src: "../fonts/risque-regular.ttf" });

const GridWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;

const Main = styled.main`
  height: 100%;
  overflow-y: scroll;
`;

const Headline = styled.h1`
  margin: 0;
  margin-bottom: 0.2rem;
  display: grid;
  place-items: center;
  font-size: 3rem;
`;

export default function Layout({ children }) {
  return (
    <GridWrapper>
      <Headline className={risque.className}>Questicator</Headline>
      <Main>{children}</Main>
      <Navigation />
    </GridWrapper>
  );
}
