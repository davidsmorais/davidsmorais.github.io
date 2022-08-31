import { lazy, useState } from "react";
import { useQuery } from "graphql-hooks";
import useTranslate from "Hooks/useTranslate";

import CONFIG from "Config";
import { Title, Link, Body, Row } from "Common";
import Button from "Common/Button";

import S from "./style";

const Container = lazy(() => import("Common/Container"));
const AllPostsGrid = lazy(() => import("Components/AllPostsGrid"));

const AllPosts = () => {
  const { t } = useTranslate();
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(null);
  const BLOGPOSTS_QUERY = `{
    user(username: "${CONFIG.blog.hashnodeUsername}") {
      publication {
        posts(page: ${page}) {
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
          <Row justify="center" align="center" className="pagination-controls">
            <Button onClick={() => setPage(page - 1)} disabled={page === 0}>
              ⬅️
            </Button>
            <Body>Page: {page + 1}</Body>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === maxPage}
            >
              ➡️
            </Button>
          </Row>
        </Container>
      )}
    </S.StyledContainer>
  );
};

export default AllPosts;
