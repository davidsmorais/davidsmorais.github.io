import styled from "styled-components";
import { Col } from "Common";

export const ProjectsContainer = styled(Col)`
  width: 100%;
  overflow-x: scroll;
  margin-top: ${({ theme }) => theme.margin * 4}px;
  padding-right: ${({ theme }) => theme.margin * 4}px;
  padding-left: ${({ theme }) => theme.margin * 4}px;
`;

export const ProjectsCard = styled(Col)`
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 16px;
  margin-top: 32px;
  flex: 1;
  max-width: 320px;
  background: ${({ theme }) => `${theme.darkGrey}`};
  padding: 16px;
  svg {
    width: 24px;
    margin: 0 8px;
  }
  span {
    font-size: 20px;
    margin: 0 8px;
  }
  img {
    width: 64px;
    margin: 0 auto;
  }
  transition: scale 0.5 ease-in;
  &:hover {
    transform: scale(1.05);
    > * {
      color: ${({ theme }) => theme.accent.main} !important;
    }
    svg path {
      fill: ${({ theme }) => theme.accent.main} !important;
    }
  }
`;
