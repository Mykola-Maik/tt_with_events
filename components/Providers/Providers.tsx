import theme from "@/styles/muiTheme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
