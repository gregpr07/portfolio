import styled from "styled-components";
import { device } from "../functions/device";
import { useDarkMode } from "next-dark-mode";

import TechImage from "./TechImage";

import Maxer from "./Maxer";
import SubTitle from "./SubTitle";
import Link from "next/link";
import Card from "./Card";

const data = [
  {
    title: "Videolectures.net",
    description:
      "Legacy Videolectures.net website needed a rebuild so I built a iOS and Android app, which acts as a SPA.",
    link: "https://videolectures.net",
    image: "vln.png",
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
    image: "platform.png",
    technologies: ["react.png", "node.png", "postgres.png"],
  },
  {
    title: "X5GON Discovery",
    description:
      "A search engine of X5GON project focused on finding OER materials from all over the world.",
    link: "https://discovery.x5gon.org",
    image: "discovery.png",
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
    image: "blind.png",
    technologies: [
      "tensorflow.png",
      "scikit.png",
      "react.png",
      "django.svg",
      "postgres.png",
    ],
  },
];

const IMG = styled.img`
  object-fit: contain;

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

const ImgBx = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 50%;
  right: 10px;
  transition: 1.5s ease-out;
  z-index: 1;

  filter: saturate(70%);

  ${Card}:hover & {
    transform: scale(1.05);
    filter: saturate(100%);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 3rem;
  grid-gap: 3rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Details = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  padding-top: 2rem;
  height: 50%;
  text-align: center;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 500;

  color: #2e3440;

  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor};

  @media ${device.tablet} {
    font-size: 20px;
  }

  text-decoration: none;
  font-style: normal;
`;

const H3 = styled.h3`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textColor + "85"};

  //color: #2e3440;
  display: block;
  margin-top: 0.6rem;

  font-size: 16px;
`;

export default function Creations() {
  const RenderCreation = ({ creation }) => (
    <Card>
      <a href={creation.link}>
        <ImgBx>
          <IMG
            src={"/images/creations/" + creation.image}
            alt={creation.image}
          />
        </ImgBx>
      </a>
      <Details>
        <a href={creation.link} style={{ textDecoration: "none" }}>
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
