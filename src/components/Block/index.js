import useTranslate from "Hooks/useTranslate";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Block = ({ title, content }) => {
  const { t } = useTranslate();
  return (
    <S.Container>
      <Fade left>
        <h6>{t(title)}</h6>
        <S.TextWrapper>
          <S.Content>{t(content)}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default Block;
