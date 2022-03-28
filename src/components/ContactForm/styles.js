import styled from "styled-components";
import { Title, Subtitle, Col } from "Common";

export const TitleTop = styled(Title)`
  position: relative;
  bottom: calc(72px * 1.75);
  color: ${({ theme }) => theme.background};
  @media only screen and (max-width: 480px) {
    font-size: 2.5rem;
    margin-left: ${({ theme }) => theme.margin}px;
  }
`;

export const TitleBottom = styled(Title)`
  color: ${({ theme }) => theme.text};
  position: relative;
  bottom: calc(72px);
  @media only screen and (max-width: 480px) {
    font-size: 2.5rem;
    margin-left: ${({ theme }) => theme.margin}px;
  }
`;

export const TitleContainer = styled(Col)`
  height: 100%;
  flex: 1;
  max-width: 50%;
  justify-content: space-between;
`;

export const ContactContainer = styled.div`
  padding: 5rem 0;
  height: 100%;
`;

export const Contact = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.margin * 2}px;
  padding-bottom: ${({ theme }) => theme.margin * 4}px;
  max-width: 520px;
  border: 1px solid ${({ theme }) => theme.accent.secondary};
  transition: all 0.5s;
  box-shadow: none;
  &:hover {
    box-shadow: 0px -2px 10px ${({ theme }) => theme.accent.main};
    border: 1px solid ${({ theme }) => theme.accent.main};
  }
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 480px) {
    padding: ${({ theme }) => theme.margin}px;
  }
`;

export const FormTitle = styled(Subtitle)`
  color: ${({ theme }) => theme.accent.secondary};
  margin: ${({ theme }) => theme.margin}px;
`;

export const Span = styled.span`
  display: block;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
