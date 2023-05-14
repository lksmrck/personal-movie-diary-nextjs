import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import Provider from "@components/Provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
