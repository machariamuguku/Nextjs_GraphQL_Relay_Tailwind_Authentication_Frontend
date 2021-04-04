import { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/index.css";
import Head from "next/head";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
