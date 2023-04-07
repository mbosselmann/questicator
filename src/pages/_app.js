import { QuestsProvider } from "@/context.js";

import Layout from "@/styles/Layout.js";
import GlobalStyle from "../style.js";

export default function App({ Component, pageProps }) {
  return (
    <QuestsProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </QuestsProvider>
  );
}
