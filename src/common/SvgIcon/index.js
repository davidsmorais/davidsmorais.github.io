import styled from 'styled-components';

const StyledIcon = styled.img`
width: ${({size}) => size}px;
height: ${({size}) => size}px;
`
const SvgIcon = ({ src, size }) => (
  <StyledIcon src={`/img/svg/${src}`} alt={src} size={size} />
);
const ProjectIcon = ({ src, size }) => (
  <StyledIcon src={`/img/projects/${src}`} alt={src} size={size} />
);

export { ProjectIcon };
export default SvgIcon;
