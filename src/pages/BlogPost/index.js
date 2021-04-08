import { useEffect } from "react";
import { useQuery } from "graphql-hooks";
import qs from "query-string";
import useTranslate from "Hooks/useTranslate";

import CONFIG from "Config";
import { Title, Subtitle, Col } from "Common";

import S from "./style";
const POST_QUERY = (slug) => `{
  post(slug:"${slug}", hostname: "${CONFIG.blog.hashnodeUsername}")  {
    title
    dateAdded
    coverImage
    content
  }
}`;

const BlogPost = () => {
  const { t } = useTranslate();
  const { slug } = qs.parse(location.search);
  const { loading, data } = useQuery(POST_QUERY(slug));

  const post = data?.post;

  const postHasLoaded = loading || !post;
  useEffect(() => {
    if (postHasLoaded) {
      const element = document.getElementById("scroll-target");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }
  }, [postHasLoaded]);

  return (
    <S.StyledContainer>
      <div id="scroll-target" />
      {postHasLoaded ? (
        <Title>{t("Loading")}</Title>
      ) : (
        <Col>
          <img src={post.coverImage} />
          <Title>{post.title}</Title>
          <Subtitle>{new Date(post.dateAdded).toLocaleDateString()}</Subtitle>
          <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
        </Col>
      )}
    </S.StyledContainer>
  );
};

export default BlogPost;
