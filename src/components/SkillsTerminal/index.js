import React, { useState } from "react";
import {Row, Mono, Col,} from 'Common'
import SvgIcon, {ProjectIcon} from 'Common/SvgIcon'
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

export default ({ skills }) => {
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
            key={'btn-'+title}
              className={isActive ? "active" : ""}
              onClick={() => {
                setClickable(null);
                changeActiveSkill(skill.mainSkills && skill)}}
            >
              <Mono>
                {isActive ? "🚀" : ">"} {skill.title}
              </Mono>
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
          return <MonoTitle>{item.content}</MonoTitle>;
        case "label":
          return item.link ? (
            <StyledMonoLink href={item.link}>
              {item.content}
              {item.icon && <SvgIcon src={item.icon}/>}
            </StyledMonoLink>
          ) : (
            <MonoLabel>{item.content}</MonoLabel>
          );
        case "emoji":
          return <Mono>{item.content}</Mono>;
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
            <Col key={'skill-'+skill.title}>
              {Array.isArray(skill.title) ? (
                skill.title.map((title) => (
                  <Mono key={'title-'+title} className={"title"}>👉{title}</Mono>
                ))
              ) : (
                <Mono className={"title"}>{skill.title} 👇</Mono>
              )}
              {(skill?.stack ?? []).map((item) => {
                const clickableData = (clickableKeys || []).find(
                  (clk) => clk.label === item
                );
                return clickableData ? (
                  <button
                    onClick={() => setClickable(clickables[clickableData.key])}
                  >
                    <Mono>▶ {item}</Mono>
                  </button>
                ) : (
                  <Mono>▶ {item}</Mono>
                );
              })}
            </Col>
          );
        })}
        <Clickables />
      </StacksContainer>
    );
  };
  return (
    <TerminalContainer>
      <Titlebar>
        <div></div>
        <Mono>~david 🌍</Mono>
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
