import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import BottomText from "../components/BottomText";
import Maxer from "../components/Maxer";
import DarkModeSwitch from "../components/DarkModeSwitch";
import BackIcon from "../components/BackIcon";
import TechImage from "../components/TechImage";
import Text from "../components/Text";
import { data } from "../components/Creations";
import { shuffle } from "../functions/utils";

const getAllTechs = () => {
  let items = [];
  data.forEach((element) =>
    element.technologies.forEach(
      (item) => !items.includes(item) && items.push(item)
    )
  );
  return items;
};

export default function About() {
  return (
    <Header>
      <BackIcon />
      <Maxer>
        <Title>About me</Title>
        <Text>
          <p>I studying physics (graduating soon).</p>
          <p style={{ paddingTop: 5, paddingBottom: 5 }}>
            I enjoy working on DeFi projects, writing smart contracts as well as
            frontends and backends of mobile and web apps.
          </p>
          <p>I have a passion for machine learning and data analysis.</p>
        </Text>
        <SubTitle style={{ marginBottom: 15, marginTop: 30 }}>
          The technologies I work with
        </SubTitle>
        {getAllTechs().map((tech) => (
          <TechImage name={tech} big={true} />
        ))}
      </Maxer>
    </Header>
  );
}
