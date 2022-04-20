import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import ThemeContextMUI from "./contexts/ThemeContextMUI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Layout from "components/Layout";
import PagesCreate from "pages/PagesCreate";

import PageProfile from "pages/PageProfile";
import PageLogout from "pages/PageLogout";
import PageError from "pages/PageError";
import LoginForm from "components/LoginForm";
import AuthProvider from "services/auth/AuthProvider";
import AuthRequire from "services/auth/AuthRequire";

import Stats from "pages/Stats";
import Comments from "pages/Comments";
import PageUsers from "pages/PageUsers";
import Pages from "pages/Pages";

import ComponetnPage from "components/ComponentPage/ComponetnPage";

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextMUI>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <AuthRequire redirectTo="/login">
                  <Layout />
                </AuthRequire>
              }
            >
              <Route
                index
                element={
                  <AuthRequire redirectTo="/login">
                    <PagesCreate />
                  </AuthRequire>
                }
              />
              <Route
                path="/profile"
                element={
                  <PageProfile />
                }
              />
              <Route
                path="/stats"
                element={
                  <AuthRequire redirectTo="/login">
                    <Stats />
                  </AuthRequire>
                }
              />
              <Route
                path="/users"
                element={
                  <AuthRequire redirectTo="/login">
                    <PageUsers />
                  </AuthRequire>
                }
              />
              <Route
                path="/comments"
                element={
                  <AuthRequire redirectTo="/login">
                    <Comments />
                  </AuthRequire>
                }
              />
              <Route
                path="/pages"
                element={
                  <AuthRequire redirectTo="/login">
                    <Pages />
                  </AuthRequire>
                }
              />
              <Route path="/logout" element={<PageLogout />} />
              {/* <Route path="/login" element={<LoginForm />} /> */}
              {/* <Route path="*" element={<PageError />} /> */}
            </Route>
            <Route path="/:slug" element={<ComponetnPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeContextMUI>
  </Provider>,
  document.querySelector("#root")
);
