import * as S from "./styles";

const Button = ({ type, width, children, onClick }) => (
  <S.Button type={type} width={width} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
