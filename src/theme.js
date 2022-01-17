import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: '#FAFAFA',
  text: '#111517',
  elements: '#FFFFFF'
};

export const darkTheme = {
  body: '#2B3945',
  text: '#FFFFFF',
  elements: '#333e48'
};
