import React from 'react';
import { Theme, ThemeProvider } from '@mui/material/';
import { defaultTheme } from '../../theme';

type Props = {
  theme?: Theme;
  children: React.ReactNode | React.ReactNode[];
};

export const LuxThemeProvider = ({ children, theme }: Props) => {
  return (
    <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
  );
};
