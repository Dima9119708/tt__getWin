import { ReactNode } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
});

const ThemeProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
