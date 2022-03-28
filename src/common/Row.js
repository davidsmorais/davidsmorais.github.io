import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-flow: row ${(props) => (props.noWrap ? "nowrap" : "wrap")};
  padding: 0 ${(props) => props.theme.margin * (props.paddingInner ?? 1)}px;
  height: ${(props) =>
    props.size ? `${((props.size ?? 1) * 100) / 12}vh` : "auto"};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  max-width: 100vw;
  overflow: hidden;
  margin: ${(props) => (props.margin ?? 1) * props.theme.margin}px
    ${(props) =>
      props.center ? "auto" : (props.margin ?? 1) * props.theme.margin + "px"};

  @media only screen and (max-width: 480px) {
    &&&&& {
      margin: 0;
      padding: 0;
      padding-top: 0;
    }
  }
`;

export default Row;
