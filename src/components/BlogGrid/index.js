import { withTranslation } from "react-i18next";
import { useQuery } from "graphql-hooks";

import CONFIG from "Config";

import BlogPost from "Components/BlogPost";

import * as S from "./styles";
const BLOGPOSTS_QUERY = `{
  user(username: "${CONFIG.blog.hashnodeUsername}") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
        coverImage
        dateAdded
        cuid
      }
    }
  }
}`;

const BlogGrid = ({ t }) => {
  const { loading, data } = useQuery(BLOGPOSTS_QUERY);
  const posts = data?.user?.publication?.posts;
  return (
    <S.BlogsRow>
      {loading ||
        (!posts && t("Loading")) ||
        posts.map((post) => <BlogPost key={post.slug} {...post} />)}
    </S.BlogsRow>
  );
};

export default withTranslation()(BlogGrid);
