import { useQuery } from "graphql-hooks";
import qs from "query-string";
import {useHistory} from 'react-router-dom';
import { withTranslation } from "react-i18next";

import CONFIG from "Config";
import { Title, Subtitle, Col, Row } from "Common";

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
  let history = useHistory();
  const { slug } = qs.parse(location.search);
  const { loading, data } = useQuery(POST_QUERY(slug));

  const post = data?.post;
  console.log("🚀 ~ file: index.js ~ line 23 ~ BlogPost ~ post", post, data)
  console.log(
    "🚀 ~ file: index.js ~ line 31 ~ BlogPost ~ slug",
    slug,
  );

  return (
    <S.StyledContainer>
      <Row paddingInner={0} margin={0}>
        <S.BackBtn onClick={() => history.goBack()}>
          👈
          <Subtitle>{t("back")}</Subtitle>
        </S.BackBtn>
      </Row>
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
