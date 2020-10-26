import styled from "styled-components";
import { device } from "../functions/device";

export default styled.div`
  max-width: 1000px;

  @media ${device.laptopL} {
    max-width: 800px;
  }

  @media ${device.tablet} {
    max-width: 700px;
  }
`;
