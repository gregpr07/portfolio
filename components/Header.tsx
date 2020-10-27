import styled from "styled-components";
import { device } from "../functions/device";

export default styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* padding-bottom: 2.5vh; */
  @media ${device.tablet} {
    padding-bottom: 10vh;
  }

  flex: 1;
  display: flex;
`;
