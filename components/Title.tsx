import styled, { keyframes } from "styled-components";
import { device } from "../functions/device";

const translation = "translate(0,100px)";
const fadeIn = keyframes`
  from {
    opacity: 0;
/*     -webkit-transform: ${translation};
    -moz-transform: ${translation};
    -o-transform: ${translation};
    -ms-transform: ${translation}; */
  }
  to {
    opacity: 1;
/*         -webkit-transform: translate(0,0);
    -moz-transform: translate(0,0);
    -o-transform: translate(0,0);
    -ms-transform: translate(0,0); */
  }
`;

export default styled.h1`
  text-align: left;
  margin: 0;
  line-height: 1.15;

  font-weight: 600;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  //animation-timing-function: cubic-bezier(0.4, -0.55, 0.1, 1);
  width: 100%;
  font-size: 50px;
  @media ${device.laptop} {
    font-size: 44px;
  }
  @media ${device.tablet} {
    font-size: 34px;
  }
  @media ${device.mobileL} {
    font-size: 30px;
  }
`;
