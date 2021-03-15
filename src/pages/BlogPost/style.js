import { lazy } from "react";
import styled from "styled-components";

const Container = lazy(() => import("Common/Container"));

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
export default {  StyledContainer };
