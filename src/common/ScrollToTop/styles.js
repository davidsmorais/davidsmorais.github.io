import styled from 'styled-components';

export const Up = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 !important;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.accent.secondary};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.accent.background};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.accent.main};
    color: ${({ theme }) => theme.accent.text};
  }
  div {
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
