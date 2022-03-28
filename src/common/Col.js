import styled from "styled-components";

const Col = styled.div`
  display: flex;
  flex-flow: column;
  flex: ${(props) => props.size};
  margin: 0;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin-right: ${(props) => props.theme.margin}px;
  margin-bottom: ${(props) => props.theme.margin}px;
  width: ${(props) => props.hidden && "0"};
  height: ${(props) => props.hidden && "0"};
  transition: all 0.25s;
`;

export default Col;
