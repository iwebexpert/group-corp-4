import { createTheme } from "@mui/material";

// A custom theme for this app

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  }
});

const themes = {
  dark: darkTheme,
  light: lightTheme
};

export default themes;