import { lazy } from "react";
import { useQuery } from "graphql-hooks";
import useTranslate from "Hooks/useTranslate";

import CONFIG from "Config";
import { Title, Link } from "Common";

import S from "./style";

const Container = lazy(() => import("Common/Container"));
const AllPostsGrid = lazy(() => import("Components/AllPostsGrid"));

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

const AllPosts = () => {
  const { t } = useTranslate();
  const { loading, data } = useQuery(BLOGPOSTS_QUERY);

  return (
    <S.StyledContainer>
      <div id="scroll-target" />
      {loading ? (
        <Title>{t("Loading")}</Title>
      ) : (
        <Container>
          <Title>{t("allPosts")}</Title>
          <Link href="/">🏠 {t("Home")}</Link>
          <AllPostsGrid
            loading={loading}
            posts={data?.user?.publication?.posts}
          />
        </Container>
      )}
    </S.StyledContainer>
  );
};

export default AllPosts;
