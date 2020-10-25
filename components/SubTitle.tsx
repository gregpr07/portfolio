import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% { opacity:0; }
    /* 45% { opacity:0; } */
    100% { opacity:1; }
`;

export default styled.p`
  margin: 0;
  line-height: 1.15;
  font-size: 34px;
  font-weight: 300;
  animation: ${fadeIn} 2s;
  padding-top: 0.5rem;
  text-align: left;
`;
