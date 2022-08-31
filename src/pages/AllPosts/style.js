import { lazy } from "react";
import styled from "styled-components";

const Container = lazy(() => import("Common/Container"));

const StyledContainer = styled(Container)`
  max-width: 1280px;
  min-height: 50vh;
  padding: 0;
  padding: ${({ theme }) => theme.margin * 5}px;
  img {
    margin-bottom: ${({ theme }) => theme.margin * 4}px;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      margin: 0;
    }
    h2 {
      font-size: 1.5rem;
      margin: 0;
    }
    h3 {
      font-size: 1.25rem;
      margin: 0;
    }
  }
  .pagination-controls {
    button {
      background: transparent;
      font-size: 32px;
      &:disabled {
        filter: grayscale(1);
      }
    }
    p {
      margin: 0 !important;
    }
  }
`;

const Content = styled.div`
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      margin: 0;
    }
    h2 {
      font-size: 1.5rem;
      margin: 0;
    }
    h3 {
      font-size: 1.25rem;
      margin: 0;
    }
    p {
      font-size: 1rem;
    }
  }
  > * {
    font-family: Cabin;
  }
  img {
    max-width: 720px;
    margin: 0 auto;
    display: flex;

    @media only screen and (max-width: 575px) {
      max-width: 300px;
      display: block;
      width: auto;
      height: auto;
    }
  }
  h1,
  h2,
  h3 {
    font-weight: 900;
    line-height: 125%;
    font-family: Raleway;
  }
  h3 {
    font-size: 1.75rem;
  }
  code {
    background-color: ${({ theme }) => theme.secondaryBackground};
    color: ${({ theme }) => theme.accent.main};
    font-family: Fira Code, monospace;
    font-style: normal;
    font-weight: normal;
  }
  pre {
    background-color: ${({ theme }) => theme.secondaryBackground};
    padding: ${({ theme }) => theme.margin}px;
    > * {
      color: ${({ theme }) => theme.accent.main};
      font-family: Fira Code, monospace;
      font-style: normal;
      font-weight: normal;
      padding-left: ${({ theme }) => theme.margin}px;
      &:before {
        content: "~ ";
      }
    }
  }
  li {
    font-size: 1rem;
    color: ${({ theme }) => theme.accent.main};
  }
  a {
    text-decoration: underline;
    font-weight: 900;
  }
`;
export default { StyledContainer, Content };
