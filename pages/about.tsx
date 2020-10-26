import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import BottomText from "../components/BottomText";
import Maxer from "../components/Maxer";
import DarkModeSwitch from "../components/DarkModeSwitch";
import BackIcon from "../components/BackIcon";

export default function About() {
  return (
    <Container>
      <Header>
        <BackIcon />
        <Maxer>
          <DarkModeSwitch />
          <Title>About me</Title>
        </Maxer>
      </Header>
    </Container>
  );
}
