import styled from "styled-components";
import { Col, Body } from "Common";

export const BlogPostContainer = styled(Col)`
  flex: 1;
  min-width: 280px;
  max-width: 280px;
  background: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.margin * 2}px;
  padding-bottom: ${({ theme }) => theme.margin * 4}px;
  margin-right: ${({ theme }) => theme.margin * 4}px;
  border: 1px solid ${({ theme }) => theme.accent.secondary};
  transition: all 0.5s;
  box-shadow: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    box-shadow: 0px -2px 10px ${({ theme }) => theme.accent.main};
    border: 1px solid ${({ theme }) => theme.accent.main};
  }
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
  > * {
    flex: 1;
  }
  img {
    margin: ${({ theme }) => theme.margin}px;
    max-width: 100%;
  }
`;
export const DateText = styled(Body)`
  color: ${({ theme }) => theme.accent.main};
`;
