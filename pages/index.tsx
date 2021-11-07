//import styles from "../styles/Home.module.css";

import Link from "next/link";

import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import BottomText from "../components/BottomText";
import Maxer from "../components/Maxer";
import Creations from "../components/Creations";

import DarkModeSwitch from "../components/DarkModeSwitch";

import { Bounce } from "react-awesome-reveal";

export default function Index() {
  return (
    <>
      <Header>
        <DarkModeSwitch />
        <Maxer>
          <Title>
            Hi, I am Gregor Žunič <Bounce triggerOnce>&#129304;</Bounce>
          </Title>
          <SubTitle>
            Fullstack and Blockchain developer, Machine Learning reseacher and
            Physics student
          </SubTitle>
        </Maxer>
        <BottomText>
          Read <Link href="/about">about me</Link> or{" "}
          <Link href="/contact">contact me</Link>
        </BottomText>
      </Header>
      <Creations />
    </>
  );
}
