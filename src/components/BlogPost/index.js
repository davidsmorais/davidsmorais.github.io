import { lazy } from "react";
import { useHistory } from "react-router-dom";
import useTranslate from "Hooks/useTranslate";
import { BlogPostTitle, Body } from "Common";

import * as S from "./styles";
const Button = lazy(() => import("Common/Button"));

const Post = ({ title, brief, publishedAt, coverImage, slug, id }) => {
  const { t } = useTranslate();
  let history = useHistory();
  return (
    <S.BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <S.DateText>{new Date(publishedAt).toLocaleDateString()}</S.DateText>
      <img src={coverImage.url} alt={slug} />
      <Body>{brief}</Body>
      <Button type="secondary" onClick={() => history.push(`/post?id=${id}`)} w>
        {t("Read More")}
      </Button>
    </S.BlogPostContainer>
  );
};

export default Post;
