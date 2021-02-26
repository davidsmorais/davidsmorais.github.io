import { lazy } from "react";
import styled from "styled-components";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CONFIG from 'Config';

const SkillsTerminal = lazy(() => import("Components/SkillsTerminal"));
const ContactFrom = lazy(() => import("Components/ContactForm"));
const ContentBlock = lazy(() => import("Components/ContentBlock"));
const MiddleBlock = lazy(() => import("Components/MiddleBlock"));
const ScrollToTop = lazy(() => import("Common/ScrollToTop"));
const Container = lazy(() => import("Common/Container"));

const StyledBackgroundContainer = styled(Container)`
  &&& {
    background-image: linear-gradient(
        180deg,
        #b3f9e680 0%, rgba(18, 18, 18, 0.5) 100%
      ),
      url("/img/bg1.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: hard-light;
  }
`;

const StyledBlackAndWhiteContainer = styled(Container)`
&&& {
  height: 150%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.accent.secondary} 50%,
    ${({ theme }) => theme.background} 50%
  );
}
`;

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <StyledBackgroundContainer>
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="avatar.png"
        id="intro"
      />
      </StyledBackgroundContainer>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <SkillsTerminal skills={CONFIG.skillsTerminal}/>

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <StyledBlackAndWhiteContainer>
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
      </StyledBlackAndWhiteContainer>
    </Container>
  );
};

export default Home;
