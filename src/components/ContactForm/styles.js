import styled from 'styled-components';
import { Title, Col } from "Common";

export const TitleTop = styled(Title)`
position: relative;
bottom: calc(72px * 2.5);
color:${({theme}) => theme.background}`

export const TitleBottom = styled(Title)`
  color: ${({ theme }) => theme.text};
  position: relative;
  bottom: calc(72px);
`;

export const  TitleContainer = styled(Col)`
height: 100%;
flex: 1;
max-width: 50%;
justify-content: space-between`

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
  max-width: 520px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
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
