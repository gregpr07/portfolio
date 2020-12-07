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

const content = {
  technologies: [
    "django.svg",
    "react.png",
    "tensorflow.png",
    "scikit.png",
    "elasticsearch.png",
    "redux.png",
    "node.png",
    "postgres.png",
    "iu.png",
  ],
};

export default function About() {
  return (
    <Header>
      <BackIcon />
      <Maxer>
        <Title>About me</Title>
        <Text>
          I amworking on web crawlers, data analysis, data presentation and
          created the backend and frontend of many websites a mobile
          application.
          <br />I also work in research in machine learning field, more
          specifically on text mining and multi- level classification.
        </Text>
        <SubTitle style={{ marginBottom: 15 }}>
          The technologies I work with
        </SubTitle>
        {content.technologies.map((tech) => (
          <TechImage name={tech} big={true} />
        ))}
      </Maxer>
    </Header>
  );
}
