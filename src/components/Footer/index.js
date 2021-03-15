import { lazy, Fragment } from "react";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import CONFIG from 'Config';

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
        <SvgIcon src={src} color={"accent.main"} />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Contact")}</S.Language>
                <S.Large to="/">{t("Tell us everything")}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding the project? Feel free to reach out.`
                  )}
                </S.Para>
                <a href={`mailto:${CONFIG.contacts.email}`}>
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
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
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon src="logo.png" aria-label="homepage" size="120" />
                </S.LogoContainer>
              </S.NavLink>
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
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
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
