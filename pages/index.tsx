//import styles from "../styles/Home.module.css";

import Link from "next/link";

import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import BottomText from "../components/BottomText";
import Maxer from "../components/Maxer";
import Creations from "../components/Creations";

import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Index() {
  return (
    <>
      <Header>
        <DarkModeSwitch />
        <Maxer>
          <Title>Hi, I am Gregor Žunič &#129304;</Title>
          <SubTitle>
            Fullstack and blockchain developer, Machine Learning reseacher and
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
