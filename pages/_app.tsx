import "../styles/globals.css";
import "../styles/darkModeSwitch.css";
import withDarkMode from "next-dark-mode";
import { ThemeProvider } from "styled-components";

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

import Container from "../components/Container";

import Head from "next/head";

import { useDarkMode } from "next-dark-mode";

function MyApp({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  return (
    <ThemeProvider theme={darkModeActive ? darkTheme : lightTheme}>
      <Head>
        <title>Gregor Žunič</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp);
