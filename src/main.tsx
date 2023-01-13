import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./style/globalStyle";
import theme from "./style/theme";

import Router from "@/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider {...{ theme }}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
