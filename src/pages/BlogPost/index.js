import { useQuery } from "graphql-hooks";
import qs from "query-string";
import { withTranslation } from "react-i18next";

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

const BlogPost = ({ t }) => {
  const { slug } = qs.parse(location.search);
  const { loading, data } = useQuery(POST_QUERY(slug));

  const post = data?.post;

  return (
    <S.StyledContainer>
      {loading || !post ? (
        <Title>{t("Loading")}</Title>
      ) : (
        <Col>
          <img src={post.coverImage} />
          <Title>{post.title}</Title>
          <Subtitle>{new Date(post.dateAdded).toLocaleDateString()}</Subtitle>
          <S.Content dangerouslySetInnerHTML={{__html: post.content}}/>
        </Col>
      )}
    </S.StyledContainer>
  );
};

export default withTranslation()(BlogPost);
