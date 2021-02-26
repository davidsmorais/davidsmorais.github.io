import styled from "styled-components";
import {Row, Col, Mono} from 'Common'


export const TerminalContainer = styled(Col)`
  border: 1px solid ${({ theme }) => theme.accent.main};
  background: ${({ theme }) => theme.secondaryBackground};
  padding: 0;
  span {
    color: ${({ theme }) => theme.accent.secondary};
  }
  >div {
    margin: 0;
    padding: 0;
  }
`;

export const Titlebar = styled(Row)`
  margin:0;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme})=> theme.accent.main};
  background: ${({theme})=> theme.background};
`;

export const MonoTitle = styled(Mono)`
  font-size: 32px;
  color: ${({theme})=> theme.accent.main};
`;
export const MonoLabel = styled(Mono)`
  font-size: 18px;
  color: ${({ theme }) => theme.accent.main};
`;
export const TerminalBtn = styled.span`
  width: 16px;
  height: 16px;
  background: ${({theme})=> theme.accent.main};
  border-radius: 50px;
  margin: ${({theme})=> theme.margin}px ${({theme})=> theme.margin}px ${({theme})=> theme.margin}px 0;
`;
export const SectionsBar = styled(Row)`

  & > button {
    background: ${({theme})=> theme.background};
    border: 1px solid ${({theme})=> theme.accent.main};
    outline: none;
    display: flex;
    flex-flow: row nowrap;
    padding: ${({theme})=> theme.margin / 2}px;
    cursor: pointer;
    transition: all 0.5s;
    > span {
      transition: all 0.5s;
    }
    &:hover {
      background: ${({theme})=> theme.accent.secondary};
      > span {
        color: ${({theme})=> theme.background};
      }
    }
    &.active {
      background: ${({theme})=> theme.accent.main};
      border: none;
      > span {
        color: ${({theme})=> theme.background};
      }
    }
  }
`;

export const StacksContainer = styled(Row)`
&& {  margin-top: ${({theme})=> theme.margin / 2}px;
  margin-left: ${({theme})=> theme.margin * 2}px;
  margin-bottom: ${({theme})=> theme.margin * 4}px;}
  justify-content: flex-start;
  > div {
    align-items: flex-start;
    flex: 1;
    span {
      text-align: left;
    }
    span.title {
      margin-bottom: ${({theme})=> theme.margin / 2}px;
    }
    span:not(.title) {
      padding-left: ${({theme})=> theme.margin * 2}px;
    }
    button {
      border: none;
      background: ${({theme})=> theme.secondaryBackground};
      cursor: pointer;
      span {
        color: ${({theme})=> theme.accent.main};
        &:hover {
          color: ${({theme})=> theme.accent.secondary};
        }
      }
    }
  }
`;