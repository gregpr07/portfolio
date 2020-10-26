import styled from "styled-components";
import { device } from "../functions/device";
import { useDarkMode } from "next-dark-mode";

const IMG = styled.img`
  border-radius: 8px;

  width: 45px;
  height: 45px;
  @media ${device.laptop} {
    width: 34px;
    height: 34px;
  }
  @media ${device.tablet} {
    width: 28px;
    height: 28px;
  }

  display: inline;

  vertical-align: middle;

  margin: 0;
  padding: 0;

  margin-right: 8px;
`;

export default function Image({ name, dark = false }) {
  const { darkModeActive } = useDarkMode();
  return (
    <IMG
      src={"/images/" + (darkModeActive && dark ? "dark_" : "") + name}
      alt={name}
    />
  );
}
