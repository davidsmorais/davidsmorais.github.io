import styled from "styled-components";

export const Header = styled.div`
  z-index: 1;
  padding: 0 !important;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  img {
    max-height: 64px;
  }
  position: fixed;
  top: 0;
  * {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  background: ${({ theme }) => theme.red};
  padding: 1em 5rem;
  border: 1px solid;
  transition: border-color 0.25s ease-in-out;
  border-color: ${({ theme }) => theme?.accent?.secondary};
  &:hover {
    border-color: ${({ theme }) => theme?.accent?.main};
  }
  border-radius: 0px 0px 16px 16px;
  margin-right: 8px;
  color: ${({ theme }) => theme.text};
`;
