import styled from "styled-components";
import { device } from "../functions/device";

export default styled.div`
  background: ${(props) =>
      props.theme.dark
        ? null
        : "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),"}
    url("/images/indexpattern.png") repeat
    ${(props) => props.theme.colors.background};

  background-size: 1200px 1200px;
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
