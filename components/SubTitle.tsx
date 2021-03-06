import styled, { keyframes } from "styled-components";
import { device } from "../functions/device";

const fadeIn = keyframes`
    0% { opacity:0; }
    /* 45% { opacity:0; } */
    100% { opacity:1; }
`;

export default styled.p`
  margin: 0;
  line-height: 40px;

  font-weight: 300;
  animation: ${fadeIn} 1s;
  padding-top: 0.5rem;
  text-align: left;

  font-size: 34px;
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 26px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
`;
