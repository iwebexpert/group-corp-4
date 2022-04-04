import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import ThemeContextMUI from "./contexts/ThemeContextMUI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Layout from "./components/Layout";
import PagesCreate from "./pages/PagesCreate";

import PageProfile from "./pages/PageProfile";
import PageLogout from "./pages/PageLogout";
import PageError from "./pages/PageError";
import LoginForm from "./components/LoginForm";
import AuthProvider from "./services/auth/AuthProvider";
import AuthRequire from "./services/auth/AuthRequire";
import AuthRequireRoleBased from "./services/auth/AuthRequireRoleBased";
import Stats from "./pages/Stats";

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextMUI>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <AuthRequire redirectTo="/login">
                    <AuthRequireRoleBased>
                      <PagesCreate />
                    </AuthRequireRoleBased>
                  </AuthRequire>
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthRequireRoleBased redirectTo="/login">
                    <PageProfile />
                  </AuthRequireRoleBased>
                }
              />
                  <Route
                path="/stats"
                element={
                  <AuthRequire redirectTo="/login">
                  <AuthRequireRoleBased>
                    <Stats />
                  </AuthRequireRoleBased>
                </AuthRequire>
                }
              />
              <Route path="/logout" element={<PageLogout />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="*" element={<PageError />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeContextMUI>
  </Provider>,
  document.querySelector("#root")
);
