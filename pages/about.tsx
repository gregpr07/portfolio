import BackIcon from "../components/BackIcon";
import Header from "../components/Header";
import Maxer from "../components/Maxer";
import Text from "../components/Text";
import Title from "../components/Title";

export default function About() {
  return (
    <Header>
      <BackIcon />
      <Maxer>
        <Title>About me</Title>
        <Text>
          <p style={{ paddingBottom: 5 }}>
            Currently Data Science Masters student at ETH Zurich.
          </p>
          <p style={{ paddingBottom: 5 }}>I studied physics (June 22').</p>
          <p style={{ paddingBottom: 5 }}>
            I enjoy creating my own projects and startups.
          </p>
          <p>
            I have a passion for machine learning and fullstack development.
          </p>
        </Text>
      </Maxer>
    </Header>
  );
}
