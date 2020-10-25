import styled from "styled-components";

export default styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};

  padding-left: 2em;
  padding-right: 2em;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  display: flex;
`;
