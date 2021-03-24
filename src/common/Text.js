import styled from "styled-components";
// import { Link as RouterLink } from "react-router-dom";

export const Title = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 100%;
  color: ${(props) => props.theme[props.color]};
  text-align: ${(props) => props.align || ""};
  @media only screen and (max-width: 480px) {
      font-size: 3rem;
      width: 250px;
      margin: auto;
  }
  @media only screen and (max-width: 350px) {
    width: 200px;
  }
`;
export const BlogPostTitle = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 125%;
  color: ${(props) => props.theme[props.color]};
  text-align: ${(props) => props.align || ""};
`;
export const Subtitle = styled.h2`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 125%;
  text-align: ${(props) => props.align || ""};
  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    width: 200px;
    margin: auto;
  }
`;

export const Body = styled.p`
  font-family: Cabin;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 150%;
  text-align: ${(props) => props.align || ""};
`;


export const Link = styled.a`
  font-family: Cabin;
  font-style: normal;
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 120%;
  text-align: ${(props) => props.align || ""};
`;


export const MonoLink = styled.a`
  font-family: Fira Code, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 125%;
  text-align: ${(props) => props.align || ""};
`;

export const Mono = styled.span`
  font-family: Fira Code, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 125%;
  text-align: ${(props) => props.align || ""};
`;
export const Labels = styled.label`
  font-family: Fira Code, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 100%;
  text-align: ${(props) => props.align || ""};
`;
export const FooterTitle = styled.h3`
  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 125%;
  letter-spacing: 0.02em;
  text-align: ${(props) => props.align || ""};
`;
