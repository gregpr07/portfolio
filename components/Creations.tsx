import styled from "styled-components";
import { device } from "../functions/device";
import { useDarkMode } from "next-dark-mode";

import TechImage from "./TechImage";

import Maxer from "./Maxer";
import SubTitle from "./SubTitle";
import Link from "next/link";
import { abort } from "process";

const data = [
  {
    title: "Videolectures.net",
    description:
      "Legacy Videolectures.net website needed a rebuild so I built a iOS and Android app, which acts as a SPA.",
    link: "http://vln-mobile.ijs.si",
    image: "vln.jpg",
    technologies: [
      "django.svg",
      "elasticsearch.png",
      "react.png",
      "redux.png",
      "postgres.png",
    ],
  },
  {
    title: "X5GON Platform",
    description:
      "Frontend of X5GON platform, a European funded project which analyzes Open Educational Resources.",
    link: "https://platform.x5gon.org",
    image: "platform.jpg",
    technologies: ["react.png", "postgres.png"],
  },
  {
    title: "X5GON Discovery",
    description:
      "A search engine of X5GON project focused on finding OER materials from all over the world.",
    link: "https://discovery.x5gon.org",
    image: "discovery.jpg",
    technologies: [
      "elasticsearch.png",
      "react.png",
      "postgres.png",
      "node.png",
    ],
  },
  {
    title: "X5GON Blind",
    description:
      "A helper and recommender engine platform which helps blind students and learns their preferences.",
    link: "http://blind.x5gon.org",
    image: "blind.jpg",
    technologies: [
      "react.png",
      "postgres.png",
      "django.svg",
      "scikit.png",
      "tensorflow.png",
    ],
  },
];

const IMG = styled.img`
  object-fit: cover;

  border-radius: 16px;

  object-position: middle;

  position: absolute;

  vertical-align: middle;

  margin: 0;
  padding: 0;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

/* https://codepen.io/manojsilag/pen/YBOOmB */
const Card = styled.div`
  width: 300px;
  height: 350px;

  @media ${device.tablet} {
    width: 350px;
  }

  @media ${device.mobileM} {
    width: 90%;
    min-width: 350px;
  }

  position: relative;

  border-radius: 20px;
  color: ${({ theme }) => theme.colors.textColor};

  background-color: white;

  box-shadow: ${({ theme }) =>
    theme.colors.textColor === "#2E3440"
      ? "0 2px 20px 5px " + theme.colors.textColor + "25"
      : null};
  /*   margin-left: -50px; */
  transition: 0.4s ease-out;

  &:hover {
    transform: scale(1.05);

    transition: 0.4s ease-out;
    /* margin-right: 3rem; */
  }
`;

const ImgBx = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  transition: 0.4s ease-out;
  z-index: 1;

  ${Card}:hover & {
    bottom: 50%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-top: 3rem;
  grid-gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Details = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  padding-top: 1.5rem;
  height: 50%;
  text-align: center;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 500;

  color: #2e3440;

  font-size: 24px;

  @media ${device.tablet} {
    font-size: 20px;
  }

  text-decoration: none;
  font-style: normal;
`;

const H3 = styled.h3`
  font-weight: 300;

  color: #2e3440;
  display: block;
  margin-top: 5px;

  font-size: 16px;
`;

export default function Creations() {
  const RenderCreation = ({ creation }) => (
    <Card>
      <ImgBx>
        <IMG src={"/images/creations/" + creation.image} alt={creation.image} />
      </ImgBx>
      <Details>
        <a href={creation.link}>
          <H2>{creation.title}</H2>
        </a>
        <H3>{creation.description}</H3>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            alignContent: "center",
          }}
        >
          {creation.technologies.map((tech) => (
            <TechImage name={tech} />
          ))}
        </div>
      </Details>
    </Card>
  );

  return (
    <Maxer>
      <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <SubTitle>My recent creations</SubTitle>
        <Grid>
          {data.map((creation) => (
            <RenderCreation creation={creation} />
          ))}
        </Grid>
      </div>
      {/*   <div style={{ paddingTop: "2rem" }}>
        <SubTitle>My research</SubTitle>
      </div> */}
    </Maxer>
  );
}
