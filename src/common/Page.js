import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-flow: column;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: ${(props) => props.theme?.[props.color || "background"]};
`;

export default Page;
