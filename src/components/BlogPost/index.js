import { lazy } from "react";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { BlogPostTitle, Body } from "Common";

import * as S from "./styles";
const Button = lazy(() => import("Common/Button"));

const Post = ({ title, brief, dateAdded, coverImage, slug, t }) => {
  let history = useHistory();
  return (
    <S.BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <img src={coverImage} alt={slug} />
      <Body>{brief}</Body>
      <S.DateText>{new Date(dateAdded).toLocaleDateString()}</S.DateText>
      <Button
        type="secondary"
        onClick={() =>
          !console.log("cenas") && history.push(`/posts?slug=${slug}`)
        }
      >
        {t("Read More")}
      </Button>
    </S.BlogPostContainer>
  );
};

export default withTranslation()(Post);
