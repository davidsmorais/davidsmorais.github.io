import { lazy, Fragment } from "react";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "Theme";
import CONFIG from "Config";

import { FooterTitle, Mono } from "Common/Text";
import * as S from "./styles";

const SvgIcon = lazy(() => import("Common/SvgIcon"));
const Row = lazy(() => import("Common/Row"));
const Col = lazy(() => import("Common/Col"));
const Container = lazy(() => import("Common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} color={"accent.main"} hoverColor="background" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="flex-start">
              <Col size={1}>
                <S.NavLink to="/">
                  <S.LogoContainer>
                    <ThemeContext.Consumer>
                      {(ctx) => (
                        <SvgIcon
                          src={`logo-${ctx.currentTheme}.png`}
                          aria-label="homepage"
                          size="120"
                        />
                      )}
                    </ThemeContext.Consumer>
                  </S.LogoContainer>
                </S.NavLink>
              </Col>
              <Col size={2} />
              <Col size={1}>
                <FooterTitle>{t("Follow Me")}</FooterTitle>
                <S.FooterContainer>
                  <SocialLink
                    href={`https://github.com/${CONFIG.socials.github}/`}
                    src="github.svg"
                  />
                  <SocialLink
                    href={`https://twitter.com/${CONFIG.socials.twitter}`}
                    src="twitter.svg"
                  />
                  <SocialLink
                    href={`https://www.linkedin.com/in/${CONFIG.socials.linkedIn}/`}
                    src="linked-in.svg"
                  />
                  <SocialLink
                    href={`https://dev.to/${CONFIG.socials.devTo}/`}
                    src="devto.svg"
                  />
                </S.FooterContainer>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
            <Col>
              <Mono>{t('copyright')}</Mono>
            </Col>
            <Col size={2}/>
              <Col>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English 🇬🇧</option>
                    <option value="es">Português 🇵🇹</option>
                    <option value="es">Español 🇪🇸</option>
                    <option value="es">Italiano 🇮🇹</option>
                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
