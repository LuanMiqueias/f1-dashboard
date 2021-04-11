import Head from "next/head";
import { RacesContext, RacesProvider } from "../context/ContextRaces";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RacesProvider>
        <Component {...pageProps} />
      </RacesProvider>
    </>
  );
}

export default MyApp;
