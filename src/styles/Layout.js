import localFont from "@next/font/local";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router.js";

import Navigation from "../components/Navigation.js";

const risque = localFont({ src: "../assets/fonts/risque-regular.ttf" });

const GridWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;

const Main = styled.main`
  height: 100%;
  overflow-y: scroll;
  padding: 0 0.8rem;
`;

const Headline = styled.h1`
  margin: 0;
  margin-bottom: 0.2rem;
  display: grid;
  place-items: center;
  font-size: 3rem;
`;

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [pathname]);

  return (
    <GridWrapper>
      <Headline className={risque.className}>Questicator</Headline>
      <Main ref={scrollRef}>{children}</Main>
      <Navigation />
    </GridWrapper>
  );
}
