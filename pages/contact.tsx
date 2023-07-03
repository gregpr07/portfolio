import BackIcon from "../components/BackIcon";
import Header from "../components/Header";
import Maxer from "../components/Maxer";
import SubTitle from "../components/SubTitle";
import TechImage from "../components/TechImage";
import Title from "../components/Title";

export default function Contact() {
  return (
    <Header>
      <BackIcon />
      <Maxer>
        <Title
          style={{
            marginBottom: "10px",
          }}
        >
          Contact me
        </Title>

        <SubTitle>
          <TechImage name="email.svg" dark={true} />{" "}
          <a href="mailto: gregor@profaile.com">gregor@profaile.com</a>
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
