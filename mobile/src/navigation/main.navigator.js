import React from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppRoute } from "./app-routes";
import { MainDrawer } from "../screens/main";
import MainTabsNavigator from "./main-tabs.navigator";

const Drawer = createDrawerNavigator();

// FIXME(REACT-NAVIGATION-5): Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

export const MainNavigator = () => (
  // @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
  // <Drawer.Navigator>
  <Drawer.Navigator drawerContent={MainDrawer}>
    <Drawer.Screen
      name={AppRoute.MAIN}
      component={MainTabsNavigator}
      options={{ title: "Home" }}
    />
  </Drawer.Navigator>
);
