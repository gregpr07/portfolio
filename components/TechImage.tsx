import styled from "styled-components";
import { device } from "../functions/device";
import { useDarkMode } from "next-dark-mode";

interface bigImg {
  big: number;
}

const IMG = styled.img`
  border-radius: 8px;

  width: 45px;
  height: 45px;
  @media ${device.laptop} {
    width: 40px;
    height: 40px;
  }
  /*   @media ${device.tablet} {
    width: 28px;
    height: 28px;
  } */

  display: inline;

  object-fit: contain;

  vertical-align: middle;

  margin: 0;
  padding: 0;

  margin-right: 8px;
`;

export default function Image({ name, dark = false, big = false }) {
  const { darkModeActive } = useDarkMode();
  return (
    <IMG
      src={"/images/logos/" + (darkModeActive && dark ? "dark_" : "") + name}
      alt={name}
      style={
        big
          ? {
              width: "8vw",
              height: 60,
              minWidth: 50,
              maxWidth: 70,
              marginRight: 5,
              marginBottom: 10,
            }
          : null
      }
    />
  );
}
