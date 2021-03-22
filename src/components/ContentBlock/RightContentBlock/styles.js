import styled from 'styled-components';
import { Body } from 'Common';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

&& {
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
}
`;

export const Content = styled(Body)`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  @media only screen and (max-width: 480px) {
    flex-flow: row wrap;
    margin: 0 auto;
    max-width: 200px;
  }

`;

