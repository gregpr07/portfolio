import styles from "../styles/Home.module.css";

import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import BottomText from "../components/BottomText";
import Maxer from "../components/Maxer";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Home() {
  return (
    <Container>
      <Header>
        <Maxer>
          <DarkModeSwitch />
          <Title>Hey, I am Gregor Žunič</Title>
          <SubTitle>
            Fullstack developer, Machine Learning reseacher and Physics student
          </SubTitle>
        </Maxer>
        <BottomText>
          Read <a>about me</a> or <a>contact me</a>
        </BottomText>
      </Header>
      <Maxer>
        <div style={{ height: "500px", paddingTop: "2rem" }}>
          <SubTitle>My creations</SubTitle>
        </div>
      </Maxer>
    </Container>
  );
}
