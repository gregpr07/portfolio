import styled, { keyframes } from "styled-components";
import { device } from "../functions/device";
import Link from "next/link";

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 20 20"
  >
    <g /* fill="white" */ fillRule="nonzero">
      <path
        d="M38.75 67.75H24.813l6.109-6.11c.483-.483.483-1.266 0-1.75l-.016-.015c-.503-.486-1.302-.479-1.797.016l-8.402 8.402c-.39.39-.39 1.024 0 1.414l8.418 8.418c.483.483 1.267.483 1.75 0 .484-.484.486-1.268.004-1.754l-6.066-6.121H38.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25z"
        transform="translate(-20 -59)"
      />
    </g>
  </svg>
);

const fadeIn = keyframes`
    0% { opacity:0;
        transform: rotate(720deg)
        }
    50% { opacity:0; }
    100% { opacity:1;
          transform: rotate(0deg) 
        }
`;

const P = styled.p`
  position: absolute;
  top: 0;
  margin-top: 2rem;
  line-height: 1.15;
  font-weight: 300;

  animation: ${fadeIn} 1s;
  text-align: center;

  font-size: 24px;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }

  svg {
    fill: ${(props) => props.theme.colors.textColor};
  }

  &:hover {
    svg {
      //opacity: 0.7;
      fill: ${(props) => props.theme.colors.buttonColor};
    }
  }
`;

export default function BackIcon() {
  return (
    <Link href="/">
      <a>
        <P>
          <Icon />
        </P>
      </a>
    </Link>
  );
}
