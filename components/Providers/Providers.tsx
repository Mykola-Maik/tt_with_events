"use client";
import ServiceModalProvider from "@/containers/providers/ServiceModalProvider";
import store from "@/redux/store";
import theme from "@/styles/muiTheme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { GlobalLoader } from "..";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ServiceModalProvider>
          <Suspense fallback={<GlobalLoader isOpen={true} />}>
            {children}
          </Suspense>
        </ServiceModalProvider>
      </Provider>
    </MuiThemeProvider>
  );
};
