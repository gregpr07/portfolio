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
        <title>Gregor's portfolio</title>
        <meta
          name="description"
          content="Gregor Žunič's portfolio website focused on programming and resarch"
        />
        <meta
          name="keywords"
          content="Programmer, Full Stack, Physics, Machine Learning"
        />
        <meta name="author" content="Gregor Žunič" />
        <meta
          name="google-site-verification"
          content="wI61WY7qM1-YSqsA-9Iab0R7-xcEw1qNm9tMvAowyZ4"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp);
