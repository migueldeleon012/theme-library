import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#EB6400',
    },
    secondary: {
      main: '#FDC187',
      contrastText: '#000',
    },
    error: {
      main: '#D32F2F',
      contrastText: '#fff',
    },
    warning: {
      main: '#FBC02D',
      contrastText: '#000',
    },
    success: {
      main: '#388E3C',
    },
    info: {
      main: '#0288D1',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '4px',
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: 'white !important',
        },
        icon: {
          color: 'white !important',
        },
      },
    },
  },
});
defaultTheme.typography.h1 = {
  [defaultTheme.breakpoints.up('xs')]: {
    fontSize: '28px',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '40px',
  },
};
defaultTheme.typography.h2 = {
  [defaultTheme.breakpoints.up('xs')]: {
    fontSize: '24px',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
};
defaultTheme.typography.h3 = {
  [defaultTheme.breakpoints.up('xs')]: {
    fontSize: '20px',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
};
defaultTheme.typography.h4 = {
  [defaultTheme.breakpoints.up('xs')]: {
    fontSize: '18px',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '20px',
  },
};
defaultTheme.typography.h5 = {
  [defaultTheme.breakpoints.up('xs')]: {
    fontSize: '16px',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
};
defaultTheme.typography.h6 = {
  [defaultTheme.breakpoints.up('xs')]: {
    fontSize: '14px',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
};
defaultTheme.typography.body1 = {
  [defaultTheme.breakpoints.up('xs')]: {
    fontSize: '16px',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
};
