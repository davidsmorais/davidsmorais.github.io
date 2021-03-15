import { lazy } from "react";
import styled from "styled-components";

const Container = lazy(() => import("Common/Container"));

const StyledBackgroundContainer = styled(Container)`
  &&& {
    background-image: ${({ theme }) => theme.gradients.main},
      url("/img/bg1.png");
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
  }
`;

export default { StyledBackgroundContainer , StyledContainer, StyledBlackAndWhiteContainer };
