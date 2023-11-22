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
        <meta
          name="description"
          content="I study Data Science Masters at ETH. Founder working as a fullstack developer, and Machine Learning researcher, currently creating my own startup in the field of Machine Learning."
        />
        <meta
          name="keywords"
          content="Programmer, Generative AI, Full Stack, Physics, Machine Learning, ETH Zurich, Institute Jozef Stefan, IJS, Ljubljana"
        />
        <meta name="author" content="Gregor Žunič" />
        <meta
          name="google-site-verification"
          content="wI61WY7qM1-YSqsA-9Iab0R7-xcEw1qNm9tMvAowyZ4"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp);
