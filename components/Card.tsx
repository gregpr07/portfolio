import styled from "styled-components";
import { device } from "../functions/device";

const Card = styled.div`
  width: 400px;
  height: 350px;

  @media ${device.tablet} {
    width: 350px;
  }

  @media ${device.mobileL} {
    width: 85vw;
    min-width: 320px;
  }

  @media ${device.mobileS} {
    width: 90%;
    min-width: 275px;
  }

  position: relative;

  border-radius: 20px;

  backdrop-filter: ${({ theme }) => (theme.dark ? "blur(30px)" : "blur(3px)")};

  background-color: ${({ theme }) => theme.colors.cardBackground};
  opacity: 0.8;

  box-shadow: ${({ theme }) =>
    theme.colors.textColor === "#2E3440"
      ? "0 2px 20px 5px " + theme.colors.textColor + "25"
      : "0 2px 10px 3px " + theme.colors.cardBackground + "15"};
  /*   margin-left: -50px; */
  transition: 0.4s ease-out;

  &:hover {
    /* transform: scale(1.01); */

    opacity: 0.85;

    transition: 0.4s ease-out;

    box-shadow: ${({ theme }) =>
      theme.colors.textColor === "#2E3440"
        ? "0 2px 20px 5px " + theme.colors.textColor + "35"
        : null};

    /* margin-right: 3rem; */
  }
`;

export default Card;
