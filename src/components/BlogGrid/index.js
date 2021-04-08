import useTranslate from "Hooks/useTranslate";
import BlogPost from "Components/BlogPost";
import * as S from "./styles";

const BlogGrid = ({ posts, loading }) => {
  const { t } = useTranslate();
  return (
    <S.BlogsRow>
      {loading ||
        (!posts && t("Loading")) ||
        posts.map((post) => <BlogPost key={post.slug} {...post} />)}
    </S.BlogsRow>
  );
};

export default BlogGrid;
