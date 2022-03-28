import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme, type }) =>
    type === "secondary" ? theme.background : theme.accent.secondary};

  color: ${({ theme, type }) =>
    type === "secondary" ? theme.accent.secondary : theme.background};
  font-family: Cabin;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) =>
    props.type === "secondary"
      ? `1px solid ${props.theme.accent.secondary}`
      : "0px"};
  height: 48px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? "160px" : "100%")};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? "140px" : "100%")};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? "130px" : "100%")};
  }
`;
