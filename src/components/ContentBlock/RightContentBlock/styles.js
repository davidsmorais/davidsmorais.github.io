import styled from 'styled-components';
import { Body, Mono } from 'Common';

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

export const MinTitle = styled(Mono)`
color: ${({theme}) => theme.text};
margin: ${({theme}) => theme.margin}px 0;
font-size: 18px;
`
export const MinPara = styled(Mono)`
  color: ${({ theme }) => theme.text};
  margin: ${({ theme }) => theme.margin}px ${({ theme }) => theme.margin * 2}px;
  font-size: 14px;
`;

export const Section = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  margin: 0 auto;
  position: relative;
  left: 33vw;
  max-width: 33vw;
  bottom: 50px;
  background: ${({ theme }) => theme.background}aa;
  padding: ${({ theme }) => theme.margin}px ${({ theme }) => theme.margin * 2}px;
  &:hover {
    background: ${({ theme }) => theme.accent.secondary}aa;
  }
  @media only screen and (max-width: 480px) {
    position: initial;
    max-width: unset;
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

