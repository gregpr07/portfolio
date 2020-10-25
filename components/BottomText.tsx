import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% { opacity:0; }
    50% { opacity:0; }
    100% { opacity:1; }
`;

export default styled.p`
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  line-height: 1.15;
  font-weight: 300;
  font-size: 24px;
  animation: ${fadeIn} 3.5s;
  padding-top: 0.5rem;
  text-align: center;
`;
