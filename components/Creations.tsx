import styled from "styled-components";
import { device } from "../functions/device";
import { useDarkMode } from "next-dark-mode";

import Maxer from "./Maxer";
import SubTitle from "./SubTitle";

const data = [
  {
    title: "Videolectures.net",
    description: "",
    link: "",
    image: "platform.jpg",
    technologies: [],
  },
  {
    title: "X5GON platform",
    description: "",
    link: "",
    image: "platform.jpg",
    technologies: [],
  },
  {
    title: "X5GON discovery",
    description: "",
    link: "",
    image: "platform.jpg",
    technologies: [],
  },
  {
    title: "X5GON blind",
    description: "",
    link: "",
    image: "platform.jpg",
    technologies: [],
  },
];

const IMG = styled.img`
  border-radius: 14px;

  object-fit: cover;

  object-position: left;

  display: flex;
  height: 250px;
  width: 100%;

  width: 300px;
  /* height: 300px; */
  @media ${device.mobileM} {
    width: 100%;
  }
  /*   @media ${device.tablet} {
    width: 28px;
    height: 28px;
  }  */

  vertical-align: middle;

  margin: 0;
  padding: 0;
`;

const P = styled.p`
  line-height: 1.15;
  font-weight: 400;

  padding: 1rem;

  text-align: left;

  font-size: 20px;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

const Card = styled.div`
  width: 300px;
  display: flex;

  border-radius: 16px;
  color: ${({ theme }) => theme.colors.textColor};

  border-radius: 10px;
  box-shadow: -1rem 1rem 3rem #000;
  /*   margin-left: -50px; */
  transition: 0.4s ease-out;

  p {
    display: none;
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 0 14px 14px 0;
  }

  &:hover {
    transform: scale(1.25) translateX(-25px);

    transition: 0.4s ease-out;
    /* margin-right: 3rem; */

    p {
      display: inline;
    }

    img {
      border-radius: 14px 0 0 14px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* grid-template-columns: auto auto auto; */
  padding-top: 20px;
  grid-gap: 20px;
`;

export default function Creations() {
  const RenderCreation = ({ creation }) => (
    <Card>
      <IMG src={"/images/creations/" + creation.image} alt={creation.image} />
      <P>{creation.title}</P>{" "}
    </Card>
  );

  return (
    <Maxer>
      <div style={{ paddingTop: "4rem" }}>
        <SubTitle>My creations</SubTitle>
        <Grid>
          {data.map((creation) => (
            <RenderCreation creation={creation} />
          ))}
        </Grid>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <SubTitle>My research</SubTitle>
      </div>
    </Maxer>
  );
}
