import { Row, Col } from "antd";
import useTranslate from "Hooks/useTranslate";
import Slide from "react-reveal/Slide";

import SvgIcon from "Common/SvgIcon";
import Button from "Common/Button";
import { Title, Subtitle } from "Common";

import * as S from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  id,
  subtitle,
  section,
  loading,
}) => {
  const { t } = useTranslate();
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" MinParaalign="middle" id={id}>
        <Col lg={11} md={24} sm={24} xs={24}>
          <Slide top cascade when={!loading}>
            <S.ContentWrapper hasSection={Boolean(section?.length)}>
              <S.TitleWrapper>
                <Title>{t(title)}</Title>
                <Subtitle>{t(subtitle)}</Subtitle>
                <S.Content>{t(content)}</S.Content>
              </S.TitleWrapper>
              <S.SectionWrapper>
                {section &&
                  typeof section === "object" &&
                  section.map((item, id) => {
                    return (
                      <S.Section key={id}>
                        <S.MinTitle>
                          {t(item.title)} {t(item.icon)}
                        </S.MinTitle>
                        <S.MinPara>{t(item.content)}</S.MinPara>
                      </S.Section>
                    );
                  })}
              </S.SectionWrapper>
              {button && typeof button === "object" && (
                <S.ButtonWrapper>
                  {button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        type={item.type}
                        width="true"
                        onClick={() => scrollTo(item.target)}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
                </S.ButtonWrapper>
              )}
            </S.ContentWrapper>
          </Slide>
        </Col>
        {icon && (
          <Col lg={11} md={11} sm={12} xs={24}>
            <Slide right when={!loading}>
              <SvgIcon
                src={icon}
                className="about-block-image"
                width="100%"
                height="100%"
              />
            </Slide>
          </Col>
        )}
      </Row>
    </S.RightBlockContainer>
  );
};

export default RightBlock;
