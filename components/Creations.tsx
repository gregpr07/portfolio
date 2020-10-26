import Maxer from "./Maxer";
import SubTitle from "./SubTitle";

export default function Creations() {
  const data = [
    {
      title: "",
      description: "",
      link: "",
      image: "",
      technologies: [],
    },
  ];

  return (
    <Maxer>
      <div style={{ height: "500px", paddingTop: "2rem" }}>
        <SubTitle>My creations</SubTitle>
      </div>
    </Maxer>
  );
}
