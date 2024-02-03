import { lazy, useState, useEffect } from "react";
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
  const [cursor] = useState(null);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(null);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const BLOGPOSTS_QUERY = `
  {
    publication(host: "${CONFIG.blog.hashNodeHost}") {
      posts(first: 5, after: ${cursor ? `"${cursor}"` : null}) {
        totalDocuments
        edges {
          cursor
          node {
            title
            brief
            slug
            coverImage {
              url
            }
            publishedAt
            cuid
          }
        }
      }
    }
  }`;

  const { loading, data } = useQuery(BLOGPOSTS_QUERY);
  const edges = data?.publication?.posts?.edges ?? [];
  const posts = edges.map((edge) => edge.node);
  console.log("🚀 ~ AllPosts ~ posts:", posts);
  const lastCursor = edges[edges.length - 1]?.cursor;
  const handleSetPage = (page) => {
    scrollTo("all-posts-title");
    setPage(page);
  };
  // useEffect(() => {
  //   if (edges && edges.length && lastCursor) {
  //     setCursor(lastCursor);
  //   }
  // }, [edges, lastCursor]);
  useEffect(() => {
    if (posts && !posts.length && page && !maxPage) {
      setMaxPage(page - 1);
      handleSetPage(page - 1);
    }
  }, [data, page]);
  return (
    <S.StyledContainer>
      <div id="scroll-target" />
      {loading ? (
        <Title>{t("Loading")}</Title>
      ) : (
        <Container>
          <Title id="all-posts-title">{t("allPosts")}</Title>
          <Link href="/">🏠 {t("Home")}</Link>
          <AllPostsGrid loading={loading} posts={posts} />
          <Row justify="center" align="center" className="pagination-controls">
            <Button
              onClick={() => handleSetPage(page - 1)}
              disabled={page === 0}
            >
              ⬅️
            </Button>
            <Body>
              Page: {page + 1} {maxPage && `of ${maxPage + 1}`}
            </Body>
            <Button
              onClick={() => handleSetPage(page + 1)}
              disabled={page === maxPage || posts.length !== 6}
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
