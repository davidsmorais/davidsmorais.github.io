import { lazy } from "react";
import { Row,Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import useForm from "Hooks/useForm";
import validate from "./validationRules";

import * as S from "./styles";

const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));

const Contact = ({ title, id, t, subtitle }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };
  const getSplitTitle = () => {
    const splitTitle = t(title).split("\n");
    return {
      top: splitTitle?.[0] || "",
      bottom: splitTitle?.[1] || "",
    };
  };

  const splitTitle = getSplitTitle();
  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <S.TitleContainer>
            <S.TitleTop>{splitTitle.top}</S.TitleTop>
            <S.TitleBottom>{splitTitle.bottom}</S.TitleBottom>
          </S.TitleContainer>
          <Col>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <S.FormTitle>{t(subtitle)}</S.FormTitle>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  id="Email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  id="Message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t("send")}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
