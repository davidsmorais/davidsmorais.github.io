import { lazy, useState, useEffect } from "react";
import { useQuery } from "graphql-hooks";
import useTranslate from "Hooks/useTranslate";

import CONFIG from "Config";
import { Title, Link } from "Common";
import Button from "Common/Button";

import S from "./style";

const Container = lazy(() => import("Common/Container"));
const AllPostsGrid = lazy(() => import("Components/AllPostsGrid"));
const PAGE_SIZE = 6;

const AllPosts = () => {
  const { t } = useTranslate();
  const [cursor, setCursor] = useState(null);
  const pageCursor = cursor ? `"${cursor}"` : null;
  const BLOGPOSTS_QUERY = `
  {
    publication(host: "${CONFIG.blog.hashNodeHost}") {
      posts(first: ${PAGE_SIZE}, after: ${pageCursor}) {
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
  const totalDocuments = data?.publication?.posts?.totalDocuments ?? 0;
  const [posts, setPosts] = useState([]);
  const nodes = edges.map((edge) => edge.node);
  const handleLoadMore = () => {
    setCursor(edges[edges.length - 1].cursor);
  };
  useEffect(() => {
    if (nodes && nodes[0]) {
      const postsIds = posts.map((post) => post.cuid);
      if (!postsIds.find((id) => id === nodes[0]?.cuid)) {
        console.log("Setting posts", posts[0]?.cuid, nodes[0]?.cuid);
        debugger;
        setPosts([...posts, ...nodes]);
      }
    }
  }, [nodes, posts]);
  return (
    <S.StyledContainer>
      <div id="scroll-target" />
      {loading && !posts.length ? (
        <Title>{t("Loading")}</Title>
      ) : (
        <Container>
          <Title id="all-posts-title">{t("allPosts")}</Title>
          <Link href="/">🏠 {t("Home")}</Link>
          <AllPostsGrid loading={loading} posts={posts} />
          {totalDocuments > posts.length && (
            <Button onClick={handleLoadMore}>{t("Load More")}</Button>
          )}
        </Container>
      )}
    </S.StyledContainer>
  );
};

export default AllPosts;
