import { useHistory } from "react-router-dom";
import useTranslate from "Hooks/useTranslate";
import BlogPost from "Components/BlogPost";
import Button from "Common/Button";
import * as S from "./styles";

const AllPostsGrid = ({ posts, loading }) => {
  const { t } = useTranslate();
  let history = useHistory();
  return (
    <S.BlogsRow>
      {loading ||
        (!posts && t("Loading")) ||
        posts.map((post) => <BlogPost key={post.slug} {...post} />)}
      {!loading && posts.length < posts.length && (
        <Button type="secondary" onClick={() => history.push(`/all-posts`)}>
          {t("Load More")}
        </Button>
      )}
    </S.BlogsRow>
  );
};

export default AllPostsGrid;
