import { lazy } from "react";
import { useHistory } from "react-router-dom";
import useTranslate from "Hooks/useTranslate";
import { BlogPostTitle, Body } from "Common";

import * as S from "./styles";
const Button = lazy(() => import("Common/Button"));

const Post = ({ title, brief, dateAdded, coverImage, slug }) => {
  const { t } = useTranslate();
  let history = useHistory();
  return (
    <S.BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <img src={coverImage} alt={slug} />
      <Body>{brief}</Body>
      <S.DateText>{new Date(dateAdded).toLocaleDateString()}</S.DateText>
      <Button
        type="secondary"
        onClick={() => history.push(`/post?slug=${slug}`)}
      >
        {t("Read More")}
      </Button>
    </S.BlogPostContainer>
  );
};

export default Post;
