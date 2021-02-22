import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  label {
    font-family: Raleway;
    color: ${({theme}) => theme.accent.secondary}
  }
`;

export const Input = styled.input`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.accent.secondary};
  outline: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-radius: 8px;
  color: ${({ theme }) => theme.accent.main};
  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 125%;
  background: ${({ theme }) => theme.background};
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
