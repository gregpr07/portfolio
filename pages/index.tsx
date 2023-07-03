import Link from "next/link";

import BottomText from "../components/BottomText";
import Creations from "../components/Creations";
import Header from "../components/Header";
import Maxer from "../components/Maxer";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Index() {
  return (
    <>
      <Header>
        <DarkModeSwitch />
        <Maxer>
          <Title>Hi, I am Gregor Žunič &#129304;</Title>
          <SubTitle>
            Fullstack developer, Data Scientist, Physicist, and Machine Learning
            reseacher. I make startups.
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
