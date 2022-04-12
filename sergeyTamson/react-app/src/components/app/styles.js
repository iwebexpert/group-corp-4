import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3a3f58',
    },
    secondary: {
      main: '#565861',
    },
  },

  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          background: '#ece6cd',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#ee6a59',
          borderBottomColor: '#3a3f58',
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f9ac67',
    },
    secondary: {
      main: '#ece6cd',
    },
  },

  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          background: '#3a3f58',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#f9ac67',
          borderBottomColor: '#ece6cd',
        },
      },
    },
  },
})
