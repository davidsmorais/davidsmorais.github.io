
import { useQuery } from "graphql-hooks";
import { useParams } from "react-router";
import { withTranslation } from "react-i18next";

import CONFIG from "Config";
import { Title, Subtitle, Col } from "Common";

import S from './style';
const POST_QUERY = (slug) => `{
  post(slug:${slug}, hostname: "${CONFIG.blog.hashnodeUsername}")  {
    title
    dateAdded
    coverImage
    content
  }
}`;

const BlogPost = ({t}) => {

    let { slug } = useParams();
    const { loading, data } = useQuery(POST_QUERY(slug));

    console.log("🚀 ~ file: index.js ~ line 31 ~ BlogPost ~ slug", slug)
    const post = data?.post;

  return (
    <S.StyledContainer>
      {loading || !post ? (
        <Title>{t("Loading")}</Title>
      ) : (
        <Col>
          <Title>{post.title}</Title>
          <Subtitle>{post.dateAdded}</Subtitle>
          <img src={post.coverImage}/>
        </Col>
      )}
    </S.StyledContainer>
  );
};

export default withTranslation()(BlogPost);
