import styled from 'styled-components';
import { Row } from "Common";

export const BlogsRow = styled(Row)`
  width: 100%;
  padding-right: ${({ theme }) => theme.margin * 4}px;
  padding-left: ${({ theme }) => theme.margin * 4}px;
  @media only screen and (max-width: 480px) {
    flex-flow: column;
    align-items: center;
    > div {
      margin: ${({theme}) => theme.margin}px auto;
    }
  }
`;

