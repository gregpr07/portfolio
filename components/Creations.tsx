import styled from "styled-components";
import { device } from "../functions/device";
import { useDarkMode } from "next-dark-mode";

import TechImage from "./TechImage";

import Maxer from "./Maxer";
import SubTitle from "./SubTitle";
import Link from "next/link";
import Card from "./Card";
import { shuffle } from "../functions/utils";

import { Fade } from "react-awesome-reveal";

/**
 * ICONS FROM
 *  https://devicon.dev
 */
export const data = [
  {
    title: "Idoru",
    position: "Crypto lead",
    description:
      "Crypto investment platform with access to the most exclusive private companies.",
    link: "https://idoru.capital",
    image: "idoru.png",
    technologies: ["solidity.svg", "typescript.svg"],
  },
  {
    title: "Strader",
    position: "Co-founder",
    description:
      "A collection of Telegram based tools helping crypto traders make more profit.",
    link: "https://strader.io",
    image: "strader.png",
    technologies: [
      "ethereum.svg",
      "nextjs.svg",
      "typescript.svg",
      "react.svg",
      "golang.svg",
    ],
  },
  {
    title: "Green Button",
    position: "Full-Stack Developer",
    description:
      "Button up! I have designed the architecture and implemented the mobile app and the website!",
    link: "https://green-button.io",
    image: "greenbutton.png",
    technologies: [
      "django.svg",
      "elasticsearch.png",
      "react.svg",
      "redux.svg",
      "postgres.svg",
      "tailwindcss.svg",
    ],
  },
  {
    title: "Videolectures.net",
    position: "Tech Lead",
    description:
      "Videolectures.net desperately needed rebuild. I built a mobile app, new backend and new website.",
    link: "https://videolectures.net",
    image: "vln.png",
    technologies: [
      "django.svg",
      "elasticsearch.png",
      "react.svg",
      "tailwindcss.svg",
      "redux.svg",
      "postgres.svg",
    ],
  },
  {
    title: "X5GON Platform",
    position: "Full-Stack Developer",
    description:
      "Frontend of X5GON platform, a European funded project which analyzes Open Educational Resources.",
    link: "https://platform.x5gon.org",
    image: "platform.png",
    technologies: ["react.svg", "typescript.svg", "postgres.svg"],
  },
  {
    title: "X5GON Discovery",
    position: "Frontend Developer",
    description:
      "A search engine of X5GON project focused on finding OER materials from all over the world.",
    link: "https://discovery.x5gon.org",
    image: "discovery.png",
    technologies: [
      "elasticsearch.png",
      "react.svg",
      "postgres.svg",
      "typescript.svg",
    ],
  },
  {
    title: "X5GON Blind",
    position: "Frontend Developer",
    description:
      "A helper and recommender engine platform which helps blind students and learns their preferences.",
    link: "http://blind.x5gon.org",
    image: "blind.png",
    technologies: [
      "tensorflow.svg",
      "scikit.png",
      "react.svg",
      "django.svg",
      "postgres.svg",
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
  transition: 2.5s ease-out;
  z-index: 1;

  filter: saturate(75%);

  transform: scale(0.8);

  ${Card}:hover & {
    transform: scale(0.85);
    /* filter: saturate(100%); */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 3rem;
  grid-gap: 3rem;

  @media (max-width: 850px) {
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
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor + "85"};

  //color: #2e3440;
  display: block;
  margin-top: 0.4rem;

  font-size: 16px;
`;

const H4 = styled.h4`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textColor + "85"};

  //color: #2e3440;
  display: block;
  margin-top: 0.1rem;

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
        <H3>{creation.position}</H3>
        <H4>{creation.description}</H4>
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
        <SubTitle>My work</SubTitle>
        <Grid>
          {data.map((creation, index) => (
            <Fade key={index} triggerOnce>
              <RenderCreation creation={creation} key={index} />
            </Fade>
          ))}
        </Grid>
      </div>
      {/*   <div style={{ paddingTop: "2rem" }}>
        <SubTitle>My research</SubTitle>
      </div> */}
    </Maxer>
  );
}
