import IcomoonReact from "icomoon-react";
import get from 'lodash.get';
import iconSet from "./selection.json";
import styled from "styled-components";

const StyledIcon = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
const StyledSvg = styled.div`
  svg {
    width: ${({ size }) => size || 32}px;
    height: ${({ size }) => size || 32}px;
    path {
      fill: ${({ theme, color }) => (color ? `${get(theme, color)}` : "")};
      stroke: ${({ theme, color, stroke }) =>
        color && stroke ? `${get(theme, color)}` : ""}
  }
`;
const SvgIcon = ({ src, size, color, stroke }) => {
  const isSvg = src && src.includes(".svg");
  const svgName = src && src.split(".svg")?.[0];
  return isSvg && svgName ? (
    <StyledSvg color={color} alt={src} stroke={stroke} size={size}>
      <IcomoonReact iconSet={iconSet} icon={svgName} />
    </StyledSvg>
  ) : (
    <StyledIcon src={`/img/svg/${src}`} alt={src} size={size} />
  );
};
const ProjectIcon = ({ src, size }) => (
  <StyledIcon src={`/img/projects/${src}`} alt={src} size={size} />
);

export { ProjectIcon };
export default SvgIcon;
