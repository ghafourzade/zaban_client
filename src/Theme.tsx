import { deepPurple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

interface ThemeProps {
  children: React.ReactNode;
}

const Theme = (props: ThemeProps) => {
  const theme = createTheme({
    palette: {
      primary: deepPurple,
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;