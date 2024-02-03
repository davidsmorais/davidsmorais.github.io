import { lazy, useEffect } from "react";
import { useQuery } from "graphql-hooks";
import useTranslate from "Hooks/useTranslate";

import IntroContent from "Content/IntroContent.json";
import BlogContent from "Content/BlogContent.json";
import AboutContent from "Content/AboutContent.json";
import ContactContent from "Content/ContactContent.json";
import CONFIG from "Config";
import { Row, Title } from "Common";

const Banner = lazy(() => import("Components/Banner"));
const SkillsTerminal = lazy(() => import("Components/SkillsTerminal"));
const ContactFrom = lazy(() => import("Components/ContactForm"));
const ContentBlock = lazy(() => import("Components/ContentBlock"));
const BlogGrid = lazy(() => import("Components/BlogGrid"));
const LatestProjects = lazy(() => import("Components/LatestProjects"));
const ScrollToTop = lazy(() => import("Common/ScrollToTop"));
const Container = lazy(() => import("Common/Container"));

import S from "./style";

const BLOGPOSTS_QUERY = `{
  publication(host: "${CONFIG.blog.hashNodeHost}") {
    posts(first: 5) {
      totalDocuments
      edges {
        node {
          title
          brief
          slug
          coverImage {
            url
          }
          publishedAt
          cuid
        }
      }
    }
  }
}`;

const Home = () => {
  const { t } = useTranslate();
  const { loading, data } = useQuery(BLOGPOSTS_QUERY);

  useEffect(() => {
    if (!loading && data) {
      const element = document.getElementById("header");
      if (element)
        element.scrollIntoView({
          behavior: "smooth",
        });
    }
  }, [loading]);

  return (
    <S.StyledContainer>
      <Banner />
      {loading && (
        <S.LoadingModal>
          <Title>{t("loading")}</Title>
        </S.LoadingModal>
      )}
      <ScrollToTop />
      <S.StyledBackgroundContainer>
        <Row justify="center">
          <ContentBlock
            type="right"
            loading={loading}
            first="true"
            title={IntroContent.title}
            subtitle={IntroContent.text}
            button={IntroContent.button}
            icon="avatar.png"
            id="header"
          />
        </Row>
      </S.StyledBackgroundContainer>
      <Row>
        <LatestProjects />
      </Row>
      <S.StyledBackgroundContainer bg={2}>
        <Container transparent>
          <ContentBlock
            type="right"
            title={AboutContent.title}
            content={AboutContent.text}
            id="about"
            section={AboutContent.section}
          />
          <SkillsTerminal skills={CONFIG.skillsTerminal} />
        </Container>
      </S.StyledBackgroundContainer>
      <Container>
        <ContentBlock type="left" title={BlogContent.title} id="blog" />
        <BlogGrid loading={loading} posts={data?.publication?.posts?.edges} />
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
