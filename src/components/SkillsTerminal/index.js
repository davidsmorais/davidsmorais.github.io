import React, { useState } from "react";
import {Row, Mono, Col} from 'Common'
import {
  SectionsBar,
  StacksContainer,
  MonoTitle,
  Titlebar,
  TerminalContainer,
  TerminalBtn,
  MonoLabel,
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
          return <MonoLabel>{item.src}</MonoLabel>;
        case "title":
          return <MonoTitle>{item.content}</MonoTitle>;
        case "label":
          return <MonoLabel>{item.content}</MonoLabel>;
        case "emoji":
          return <Mono>{item.content}</Mono>;
      }
    });
  };

  const Clickables = () => {
    return (
      <Col>{activeClickable && renderClickableContent(activeClickable)}</Col>
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
