import styled, { keyframes } from "styled-components";
import { device } from "../functions/device";

const fadeIn = keyframes`
    0% { opacity:0; }
   /*  50% { opacity:0; } */
    100% { opacity:1; }
`;

export default styled.p`
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  line-height: 1.15;
  font-weight: 300;

  animation: ${fadeIn} 1s;
  padding-top: 0.5rem;
  text-align: center;

  font-size: 24px;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;
