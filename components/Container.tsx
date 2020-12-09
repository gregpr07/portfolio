import styled from "styled-components";
import { device } from "../functions/device";

export default styled.div`
  background: ${(props) =>
      props.theme.dark
        ? null
        : "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),"}
    url("/images/indexpattern.png") repeat
    ${(props) => props.theme.colors.background};

  background-size: 1200px 1200px;
  background-position: ${() => Math.floor(Math.random() * Math.floor(500))}px ${() => Math.floor(Math.random() * Math.floor(500))}px;
  color: ${(props) => props.theme.colors.textColor};

  padding-left: 2em;
  padding-right: 2em;

  @media ${device.tablet} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  display: flex;
`;
