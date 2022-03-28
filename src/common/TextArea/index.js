import useTranslate from "Hooks/useTranslate";
import * as S from "./styles";

const TextArea = ({ name, id, placeholder, onChange }) => {
  const { t } = useTranslate();
  return (
    <S.Container>
      <label htmlFor={name}>{t(id)}</label>
      <S.TextArea
        spellcheck="false"
        placeholder={t(placeholder)}
        id={name}
        name={name}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default TextArea;
