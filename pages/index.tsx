//import styles from "../styles/Home.module.css";

import Link from "next/link";

import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import BottomText from "../components/BottomText";
import Maxer from "../components/Maxer";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Index() {
  return (
    <Container>
      <Header>
        <Maxer>
          <DarkModeSwitch />
          <Title>Hi, I am Gregor Žunič</Title>
          <SubTitle>
            Fullstack developer, Machine Learning reseacher and Physics student
          </SubTitle>
        </Maxer>
        <BottomText>
          Read <Link href="/about">about me</Link> or{" "}
          <Link href="/contact">contact me</Link>
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
