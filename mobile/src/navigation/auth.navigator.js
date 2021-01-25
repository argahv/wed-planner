import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AppRoute } from "./app-routes";
import { SignInScreen } from "../screens/auth";

const Stack = createStackNavigator();

const AuthNavigator = (props) => (
  <Stack.Navigator headerMode="none" initialRouteName={AppRoute.SIGN_IN}>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
  </Stack.Navigator>
);

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(AuthNavigator);
