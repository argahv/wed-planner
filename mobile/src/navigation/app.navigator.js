import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AuthNavigator from "./auth.navigator";
import { MainNavigator } from "./main.navigator";
import { AppRoute } from "./app-routes";
import { selectToken } from "../redux/global/selectors";
import { api } from "../api";
import { getUser } from "../redux/global/actions";
import { RSVP } from "../screens/rsvp";
import {
  AddFoods,
  AddQuiz,
  AddSchedule,
  AdminComponent,
  GuestCreate,
  GuestList,
} from "../screens/admin";

const Stack = createStackNavigator();

const AppNavigator = (props) => {
  const { baseUrl, token, getUser } = props;

  useEffect(() => {
    if (baseUrl) {
      api.defaults.baseURL = `${
        process.env.NODE_ENV === "production" ? "https" : "http"
      }://${baseUrl}`;
    }
  }, [baseUrl]);
  useEffect(() => {
    api.defaults.headers.common.Authorization = token;
    if (token) {
      getUser();
    }
  }, [token, getUser]);
  let initialRouteName = token ? AppRoute.MAIN : AppRoute.AUTH;
  // let initialRouteName = AppRoute.MAIN;
  return (
    <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
      <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
      <Stack.Screen name={AppRoute.MAIN} component={MainNavigator} />
      <Stack.Screen name={AppRoute.RSVP} component={RSVP} />
      <Stack.Screen name={AppRoute.ADMIN_PANEL} component={AdminComponent} />
      <Stack.Screen name={AppRoute.GUEST_CREATE} component={GuestCreate} />
      <Stack.Screen name={AppRoute.GUEST_LIST} component={GuestList} />
      <Stack.Screen name={AppRoute.ADD_QUIZ} component={AddQuiz} />
      <Stack.Screen name={AppRoute.ADD_SCHEDULE} component={AddSchedule} />
      <Stack.Screen name={AppRoute.ADD_FOODS} component={AddFoods} />
    </Stack.Navigator>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  // baseUrl: selectBaseUrl,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
