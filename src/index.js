import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";
import * as serviceWorker from "./serviceWorker";
import theme, { ThemeContext } from "Theme";
import config from "Config";

const gqlClient = new GraphQLClient({
  url: config.blog.hashnodeOrigin
});

const App = () => {
  const [currentTheme, setTheme] = useState("dark");
  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{
          currentTheme,
          changeTheme: () => {
            setTheme(currentTheme === "dark" ? "white" : "dark");
          },
        }}
      >
        <I18nextProvider i18n={i18n}>
          <ClientContext.Provider value={gqlClient}>
            <ThemeContext.Consumer>
              {(ctx) => (
                  <ThemeProvider theme={theme[ctx.currentTheme]}>
                    <Router />
                  </ThemeProvider>
                )
              }
            </ThemeContext.Consumer>
          </ClientContext.Provider>
        </I18nextProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
