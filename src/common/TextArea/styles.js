import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
  label {
    font-family: Raleway;
    color: ${({ theme }) => theme.accent.secondary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  transition: border-color 0.3s ease-in;
  color: ${({ theme }) => theme.accent.main};
  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 125%;
  background: ${({ theme }) => theme.background};
  border-color: ${({ theme }) => theme.accent.secondary};
  border-radius: 0;
  &::placeholder {
    font-family: Cabin;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${({ theme }) => theme.accent.secondary};
  }

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.accent.main};
  }
`;
