import { lazy } from "react";
import { useQuery } from "graphql-hooks";

import IntroContent from "Content/IntroContent.json";
import BlogContent from "Content/BlogContent.json";
import AboutContent from "Content/AboutContent.json";
import ContactContent from "Content/ContactContent.json";
import CONFIG from "Config";
import { Row } from "Common";

const SkillsTerminal = lazy(() => import("Components/SkillsTerminal"));
const ContactFrom = lazy(() => import("Components/ContactForm"));
const ContentBlock = lazy(() => import("Components/ContentBlock"));
const BlogGrid = lazy(() => import("Components/BlogGrid"));
const ScrollToTop = lazy(() => import("Common/ScrollToTop"));
const Container = lazy(() => import("Common/Container"));

import S from "./style";
const BLOGPOSTS_QUERY = `{
  user(username: "${CONFIG.blog.hashnodeUsername}") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
        coverImage
        dateAdded
        cuid
      }
    }
  }
}`;

const Home = () => {
  const { loading, data } = useQuery(BLOGPOSTS_QUERY);

  return (
    <S.StyledContainer>
      <ScrollToTop />
      <S.StyledBackgroundContainer>
        <Row justify="center">
          <ContentBlock
            type="right"
            first="true"
            title={IntroContent.title}
            subtitle={IntroContent.text}
            button={IntroContent.button}
            icon="avatar.png"
            id="header"
          />
        </Row>
      </S.StyledBackgroundContainer>
      <Row size={4}></Row>
      <S.StyledBackgroundContainer bg={2}>
        <Container transparent>
          <ContentBlock
            type="right"
            title={AboutContent.title}
            subtitle={AboutContent.text}
            id="about"
            section={AboutContent.section}
          />
          <SkillsTerminal skills={CONFIG.skillsTerminal} />
        </Container>
      </S.StyledBackgroundContainer>
      <Container>
        <ContentBlock type="left" title={BlogContent.title} id="blog" />
        <BlogGrid posts={data?.user?.publication?.posts} loading={loading} />
      </Container>
      <S.StyledBlackAndWhiteContainer>
        <Row justify="center">
          <ContactFrom
            title={ContactContent.title}
            subtitle={ContactContent.subtitle}
            id="contact"
          />
        </Row>
      </S.StyledBlackAndWhiteContainer>
    </S.StyledContainer>
  );
};

export default Home;
