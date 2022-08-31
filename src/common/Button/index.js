import * as S from "./styles";

const Button = ({ type, width, children, onClick, disabled }) => (
  <S.Button type={type} width={width} onClick={onClick} disabled={disabled}>
    {children}
  </S.Button>
);

export default Button;
