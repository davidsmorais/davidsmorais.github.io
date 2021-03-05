import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";
import styled from "styled-components";

const StyledIcon = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
const StyledSvg = styled.div`
  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    fill: ${({ color }) => color};
  }
`;
const SvgIcon = ({ src, size, color }) => {
  const isSvg = src && src.includes('.svg')
  const svgName = src && src.split('.svg')?.[0];
  return isSvg && svgName ? (
    <StyledSvg color={color} alt={src} size={size}>
      <IcomoonReact iconSet={iconSet} icon={svgName}/>
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
