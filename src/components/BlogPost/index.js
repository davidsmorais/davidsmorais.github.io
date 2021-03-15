import { withTranslation } from "react-i18next";
import { BlogPostTitle, Body } from "Common";

import * as S from "./styles";

const Post = ({ title, brief, dateAdded, coverImage, slug  }) => {


  return (
    <S.BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <img src={coverImage} alt={slug} />
      <Body>{brief}</Body>
      <S.DateText>{new Date(dateAdded).toLocaleDateString()}</S.DateText>
    </S.BlogPostContainer>
  );
};

export default withTranslation()(Post);
