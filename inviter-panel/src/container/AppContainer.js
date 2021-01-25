import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Router } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { getUser } from "./actions";
import { connect } from "react-redux";
import {
  PublicRoute,
  PageNotFound,
  ProtectedRoute,
  GuestRoute,
} from "./components";
import LayoutContainer from "../components/layout/LayoutContainer";
import { selectToken } from "./selectors";
import "antd/dist/antd.dark.css";

import { Dashboard, Guest } from "./protected";
import { Login } from "./guest";
const AppContainer = ({ token, getUser }) => {
  useEffect(() => {
    api.defaults.headers.common.Authorization = token;
    if (token) {
      getUser();
    }
  }, [token, getUser]);

  return (
    <>
      <LayoutContainer>
        <Router>
          <ProtectedRoute container={Dashboard} path="/" />
          <ProtectedRoute container={Guest} path="/guests/*" />
          <GuestRoute container={Login} path="/login" />
          <PublicRoute container={PageNotFound} path="*" />
        </Router>
      </LayoutContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
