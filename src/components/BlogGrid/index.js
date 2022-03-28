import { useHistory } from "react-router-dom";
import useTranslate from "Hooks/useTranslate";
import BlogPost from "Components/BlogPost";
import Button from "Common/Button";
import * as S from "./styles";

const BlogGrid = ({ posts, loading }) => {
  const { t } = useTranslate();
  const trimmedPosts = posts?.slice(0, 4) ?? [];
  let history = useHistory();
  return (
    <S.BlogsRow noWrap>
      {loading ||
        (!posts && t("Loading")) ||
        trimmedPosts.map((post) => <BlogPost key={post.slug} {...post} />)}
      {!loading && trimmedPosts.length < posts.length && (
        <Button type="secondary" onClick={() => history.push(`/all-posts`)}>
          {t("Load More")}
        </Button>
      )}
    </S.BlogsRow>
  );
};

export default BlogGrid;
