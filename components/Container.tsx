import styled from "styled-components";
import { device } from "../functions/device";

export default styled.div`
  background: ${(props) => props.theme.colors.background};
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
