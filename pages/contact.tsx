import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import BottomText from "../components/BottomText";
import Maxer from "../components/Maxer";
import DarkModeSwitch from "../components/DarkModeSwitch";
import BackIcon from "../components/BackIcon";

export default function Contact() {
  return (
    <Container>
      <Header>
        <BackIcon />
        <Maxer>
          <DarkModeSwitch />
          <Title>Contact me</Title>
          <SubTitle>
            Email: <a href="mailto: gregor.zunic@ijs.si">gregor.zunic@ijs.si</a>
          </SubTitle>
          <SubTitle>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/gregor-žunič-b5545b170">
              @gregorzunic
            </a>
          </SubTitle>
        </Maxer>
      </Header>
    </Container>
  );
}
