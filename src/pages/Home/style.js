import { lazy } from "react";
import styled from "styled-components";

const Container = lazy(() => import("Common/Container"));

const StyledBackgroundContainer = styled(Container)`
  &&& {
    background-image: ${({ theme }) => theme.gradients.main},
      ${({ bg }) => `url("/img/bg${bg || 1}.png");`}
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: -55px;
    max-width: unset;
    > div {
      padding: ${({ theme }) => theme.margin * 5}px;
    }
    @media only screen and (max-width: 480px) {
      > div {
      padding: ${({ theme }) => theme.margin * 4}px 0;
      }
    }
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  top: -55px;
  max-width: unset;
  padding: 0;
  > div,
  section {
    padding: ${({ theme }) => theme.margin * 5}px;
  }
`;

const StyledBlackAndWhiteContainer = styled(Container)`
  &&& {
    height: 150%;
    padding-top: 15%;
    max-width: unset;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.accent.secondary} 50%,
      ${({ theme }) => theme.background} 50%
    );
    @media only screen and (max-width: 760px) {
      height: auto;
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.accent.secondary} 25%,
        ${({ theme }) => theme.background} 25%
      );
    }
    @media only screen and (max-width: 480px) {
      height: auto;
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.accent.secondary} 10%,
        ${({ theme }) => theme.background} 15%
      );
    }
    @media only screen and (max-width: 320px) {
      height: auto;
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.accent.secondary} 15%,
        ${({ theme }) => theme.background} 15%
      );
    }
  }
`;

export default { StyledBackgroundContainer , StyledContainer, StyledBlackAndWhiteContainer };
