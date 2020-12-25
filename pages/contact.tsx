import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Maxer from "../components/Maxer";
import BackIcon from "../components/BackIcon";
import TechImage from "../components/TechImage";

export default function Contact() {
  return (
    <Header>
      <BackIcon />
      <Maxer>
        <Title
          css={`
            margin-bottom: 10px;
          `}
        >
          Contact me
        </Title>

        <SubTitle>
          <TechImage name="email.svg" dark={true} />{" "}
          <a href="mailto: gregor.zunic@ijs.si">gregor.zunic@ijs.si</a>
        </SubTitle>
        <SubTitle>
          <TechImage name="linkedin.svg" /> @
          <a href="https://www.linkedin.com/in/gregor-žunič-b5545b170">
            gregorzunic
          </a>
        </SubTitle>

        <SubTitle>
          <TechImage name="github.svg" dark={true} /> @
          <a href="https://github.com/gregpr07">gregpr07</a>
        </SubTitle>
      </Maxer>
    </Header>
  );
}
