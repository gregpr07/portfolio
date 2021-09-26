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
  return shuffle(items);
};

export default function About() {
  return (
    <Header>
      <BackIcon />
      <Maxer>
        <Title>About me</Title>
        <Text>
          I am working on web crawlers, data analysis, data presentation,
          backend and frontend of websites and mobile applications.
          <br />I also work in research in machine learning field, currently on
          text mining and multi-level classification.
        </Text>
        <SubTitle style={{ marginBottom: 15, marginTop: 10 }}>
          The technologies I work with
        </SubTitle>
        {getAllTechs().map((tech) => (
          <TechImage name={tech} big={true} />
        ))}
      </Maxer>
    </Header>
  );
}
