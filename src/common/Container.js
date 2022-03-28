import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: ${(props) => (props.padding ? "2.8rem" : "0 25px")};
  overflow: hidden;
  background: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.background};

  @media only screen and (max-width: 1024px) {
    max-width: 950px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 370px;
  }
`;

export default Container;
