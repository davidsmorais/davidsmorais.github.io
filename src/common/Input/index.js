import useTranslate from "Hooks/useTranslate";
import * as S from "./styles";

const Input = ({ id, name, placeholder, onChange }) => {

  const { t } = useTranslate();
  return (
    <S.Container>
      <label htmlFor={name}>{t(id)}</label>
      <S.Input
        spellcheck="false"
        placeholder={t(placeholder)}
        name={name}
        id={name}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default Input;
