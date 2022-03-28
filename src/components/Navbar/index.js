import { useState, Fragment, lazy, useContext } from "react";
import { Row, Col } from "antd";
import { useLocation, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import useTranslate from "Hooks/useTranslate";
import { ThemeContext } from "Theme";
import { Subtitle } from "Common";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Navbar = () => {
  let location = useLocation();
  let history = useHistory();
  const { t } = useTranslate();
  const isHome = location.pathname === "/";
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const themeContext = useContext(ThemeContext);
  const { currentTheme, changeTheme } = themeContext;

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={changeTheme}>
          <SvgIcon
            stroke
            size={24}
            src={currentTheme === "dark" ? "dark.svg" : "light.svg"}
            color="text"
          />
        </S.CustomNavLinkSmall>
        {isHome && (
          <>
            <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
              <S.Span>{t("About")}</S.Span>
            </S.CustomNavLinkSmall>
            <S.CustomNavLinkSmall onClick={() => scrollTo("blog")}>
              <S.Span>{t("Blog")}</S.Span>
            </S.CustomNavLinkSmall>
            <S.CustomNavLinkSmall onClick={() => scrollTo("contact")}>
              <S.Span>{t("Contact")}</S.Span>
            </S.CustomNavLinkSmall>
          </>
        )}
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="end" align="middle" gutter={20} wrap={false}>
          {!isHome && (
            <S.BackBtn onClick={() => history.goBack()}>
              👈
              <Subtitle>{t("back")}</Subtitle>
            </S.BackBtn>
          )}
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <S.StyledSidebarMenu
            closable={false}
            visible={visible}
            onClose={onClose}
          >
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </S.StyledSidebarMenu>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default Navbar;
