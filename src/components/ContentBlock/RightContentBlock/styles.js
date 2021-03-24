import styled from 'styled-components';
import { Mono } from 'Common';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 10rem 0 8rem;
  h1 {
    margin: 0;
  }
  span {
    font-size: 14px;
  }

&& {
  @media only screen and (max-width: 768px) {
    padding: 0;
    img {
      max-width: 240px;
    }
  }
}
`;

export const Content = styled(Mono)`
  margin: 1.5rem 0 2rem 0;
  color: ${({ theme }) => theme.text};
  white-space: pre-line;
  font-size: 18px;
`;
export const SectionWrapper = styled.div`
  margin: 1.5rem 0 2rem 0;
  display: flex;
  flex-flow: row wrap;
  max-width: 300px;
  margin-left: ${({ theme }) => theme.margin * 10}px;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    flex-flow: column wrap;
    margin: ${({ theme }) => theme.margin * 2}px auto;
  }
`;

export const TitleWrapper = styled.div`
  min-width: 400px;
  @media only screen and (max-width: 768px) {
    min-width: unset;
    display: flex;
    flex-flow: column;
    align-items: center;
    span {
      margin-top: ${({ theme }) => theme.margin * 2}px;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 540px;
  position: relative;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
    max-width: 375px;
  }
  ${({ hasSection }) =>
    hasSection &&
    `
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
      @media only screen and (max-width: 768px) {
      flex-flow: column wrap;
      align-center: center;
  }
  `}
`;

export const MinTitle = styled(Mono)`
  color: ${({ theme }) => theme.text};
  margin: ${({ theme }) => theme.margin}px 0;
  font-size: 18px;
  white-space: pre-line;
`;
export const MinPara = styled(Mono)`
  color: ${({ theme }) => theme.text};
  margin: ${({ theme }) => theme.margin}px ${({ theme }) => theme.margin * 2}px;
  font-size: 14px;
  white-space: pre-line;
`;

export const Section = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  min-width: 33vw;
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

