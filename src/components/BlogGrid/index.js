import { useHistory } from "react-router-dom";
import useTranslate from "Hooks/useTranslate";
import BlogPost from "Components/BlogPost";
import Button from "Common/Button";
import * as S from "./styles";
import { Body } from "Common";

const BlogGrid = ({ posts = [], loading }) => {
  const { t } = useTranslate();
  const postNodes = posts?.map((post) => post.node);
  let history = useHistory();
  return (
    <S.BlogsRow noWrap>
      {!posts.length && <Body error>{t("noPostsFound")}</Body>}
      {((loading || !posts) && t("Loading")) ||
        postNodes.map((post) => <BlogPost key={post.slug} {...post} />)}
      {!loading && postNodes.length < posts.length && (
        <Button type="secondary" onClick={() => history.push(`/all-posts`)}>
          {t("Load More")}
        </Button>
      )}
    </S.BlogsRow>
  );
};

export default BlogGrid;
