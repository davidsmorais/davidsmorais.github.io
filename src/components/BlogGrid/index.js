import { withTranslation } from "react-i18next";
import BlogPost from "Components/BlogPost";
import * as S from "./styles";

const BlogGrid = ({ posts, loading, t }) => {
  return (
    <S.BlogsRow>
      {loading ||
        (!posts && t("Loading")) ||
        posts.map((post) => <BlogPost key={post.slug} {...post} />)}
    </S.BlogsRow>
  );
};

export default withTranslation()(BlogGrid);
