import { lazy } from "react";
import styled from "styled-components";

import IntroContent from "Content/IntroContent.json";
import BlogContent from "Content/BlogContent.json";
import AboutContent from "Content/AboutContent.json";
import ContactContent from "Content/ContactContent.json";
import CONFIG from "Config";
import { Row } from "Common";

const SkillsTerminal = lazy(() => import("Components/SkillsTerminal"));
const ContactFrom = lazy(() => import("Components/ContactForm"));
const ContentBlock = lazy(() => import("Components/ContentBlock"));
// const MiddleBlock = lazy(() => import("Components/MiddleBlock"));
const ScrollToTop = lazy(() => import("Common/ScrollToTop"));
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

const Home = () => {
  return (
    <StyledContainer>
      <ScrollToTop />
      <StyledBackgroundContainer>
        <Row justify="center">
          <ContentBlock
            type="right"
            first="true"
            title={IntroContent.title}
            subtitle={IntroContent.text}
            button={IntroContent.button}
            icon="avatar.png"
            id="intro"
          />
        </Row>
      </StyledBackgroundContainer>
      <Container>
        <ContentBlock
          type="right"
          title={AboutContent.title}
          id="about"
          content={AboutContent.text}
        />
        <SkillsTerminal skills={CONFIG.skillsTerminal} />
      </Container>
      <Container>
        <ContentBlock type="left" title={BlogContent.title} id="blog" />
      </Container>
      <StyledBlackAndWhiteContainer>
        <Row justify="center">
          <ContactFrom
            title={ContactContent.title}
            subtitle={ContactContent.subtitle}
            id="contact"
          />
        </Row>
      </StyledBlackAndWhiteContainer>
    </StyledContainer>
  );
};

export default Home;
