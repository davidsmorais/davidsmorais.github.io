import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { Body } from "Common/Text";

export const StyledSidebarMenu = styled(Drawer)`
  &&& {
    .ant-drawer-wrapper-body {
      background: ${({ theme }) => theme.background} !important;
      color: ${({ theme }) => theme.text};
    }
  }
`;
export const Header = styled.header`
  z-index: 1;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  img {
    max-height: 64px;
  }
  position: sticky;
  top: 0;
  * {
    font-size: 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const BackBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 36px;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s;
  display: flex;
  max-height: 32px;
  flex-flow: row nowrap;
  align-items: center;

  &:hover {
    h2 {
      color: ${({ theme }) => theme.accent.main};
    }
  }
  > * {
    margin-left: ${({ theme }) => theme.margin * 2}px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 575px) {
    flex-flow: column wrap;
    font-size: 24px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  background: ${({ theme }) => theme.background};
  padding: 0.5rem;
  border: 1px solid;
  transition: border-color 0.25s ease-in-out;
  border-color: ${({ theme }) => theme?.accent?.secondary};
  &:hover {
    border-color: ${({ theme }) => theme?.accent?.main};
  }
  border-radius: 0px 0px 16px 16px;
  margin-right: 8px;
  color: ${({ theme }) => theme.text};
`;

export const NavLink = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.background};
  text-align: center;
`;

export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled.div`
  @media only screen and (max-width: 768px) {
    display: block !important;
  }
  padding: 1.25rem 1.25rem;
  display: none;
`;

export const NotHidden = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.h5`
  font-size: 1.37rem;
  margin-top: -0.45rem;
  padding: 0 1.56rem 0 0;
  font-weight: 600;
  border-bottom: 5px solid ${({ theme }) => theme?.accent?.main};
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: color 0.2s ease-in;
  margin: 0.25rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled(Body)`
  text-align: right;
  display: flex;
  color: ${({ theme }) => theme.text};
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  padding-right: ${(props) => (props.padding ? "10px" : "")};
`;

export const Span = styled(Body)`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  margin: 0;
  &:hover {
    color: ${({ theme }) => theme.accent.main};
  }
`;
