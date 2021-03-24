import React, { useState } from "react";
import { Row, Col } from "Common";
import { withTranslation } from "react-i18next";
import SvgIcon, { ProjectIcon } from "Common/SvgIcon";
import {
  SectionsBar,
  StacksContainer,
  MonoTitle,
  Titlebar,
  TerminalContainer,
  TerminalBtn,
  ClickablesContainer,
  MonoLabel,
  StyledMonoLink,
} from "./styles";

const SkillsTerminal = ({ skills, t }) => {
  const [activeSkill, changeActiveSkill] = useState(skills?.[0]);
  const [activeClickable, setClickable] = useState(null);
  const SectionBtns = () => {
    return (
      <SectionsBar>
        {skills.map((skill) => {
          const { title } = skill;
          const isActive = title === activeSkill?.title;
          return (
            <button
              key={"btn-" + title}
              className={isActive ? "active" : ""}
              onClick={() => {
                setClickable(null);
                changeActiveSkill(skill.mainSkills && skill);
              }}
            >
              <MonoTitle>
                {isActive ? "🚀" : ">"} {t(skill.title)}
              </MonoTitle>
            </button>
          );
        })}
      </SectionsBar>
    );
  };

  const renderClickableContent = (content) => {
    return content.map((item) => {
      switch (item.type) {
        case "image":
          return <ProjectIcon size={120} src={item.src}></ProjectIcon>;
        case "title":
          return <MonoTitle>{t(item.content)}</MonoTitle>;
        case "label":
          return item.link ? (
            <StyledMonoLink href={item.link}>
              {t(item.content)}
              {item.icon && <SvgIcon src={item.icon} />}
            </StyledMonoLink>
          ) : (
            <MonoLabel>{t(item.content)}</MonoLabel>
          );
        case "emoji":
          return <MonoLabel>{t(item.content)}</MonoLabel>;
      }
    });
  };

  const Clickables = () => {
    return (
      <ClickablesContainer justify="space-between">
        {activeClickable && renderClickableContent(activeClickable)}
      </ClickablesContainer>
    );
  };

  const SkillStacks = () => {
    const { mainSkills, clickables } = activeSkill;
    return (
      <StacksContainer>
        {mainSkills.map((skill) => {
          const { clickableKeys } = skill;
          return (
            <Col key={"skill-" + skill.title}>
              {Array.isArray(skill.title) ? (
                skill.title.map((title) => (
                  <MonoTitle key={"title-" + title} className={"title"}>
                    👉{t(title)}
                  </MonoTitle>
                ))
              ) : (
                <MonoTitle className={"title"}>{t(skill.title)} 👇</MonoTitle>
              )}
              {(skill?.stack ?? []).map((item) => {
                const clickableData = (clickableKeys || []).find(
                  (clk) => clk.label === item
                );
                return clickableData ? (
                  <button
                    onClick={() => setClickable(clickables[clickableData.key])}
                  >
                    <MonoLabel>▶ {t(item)}</MonoLabel>
                  </button>
                ) : (
                  <MonoLabel>▶ {t(item)}</MonoLabel>
                );
              })}
            </Col>
          );
        })}
        {activeClickable && <Clickables />}
      </StacksContainer>
    );
  };
  return (
    <TerminalContainer>
      <Titlebar>
        <div></div>
        <MonoTitle>~david 🌍</MonoTitle>
        <Row>
          <TerminalBtn />
          <TerminalBtn />
          <TerminalBtn />
        </Row>
      </Titlebar>
      <SectionBtns />
      <SkillStacks />
    </TerminalContainer>
  );
};

export default withTranslation()(SkillsTerminal);
