import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabs } from "../screens/main";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AppRoute } from "./app-routes";
import { HomeTabs } from "../screens/home";
import { FoodComponent } from "../screens/foods";
import { ScannerComponent } from "../screens/scanner";
import { Schedule } from "../screens/schedule";
import { QuizComponent } from "../screens/quiz";

const { Navigator, Screen } = createBottomTabNavigator();

const MainTabsNavigator = ({}) => (
  <Navigator
    tabBar={(props) => {
      return <MainTabs {...props} />;
    }}
  >
    <Screen name={AppRoute.INVITATION} component={HomeTabs} />
    <Screen name={AppRoute.FOOD} component={FoodComponent} />
    <Screen name={AppRoute.SCAN} component={ScannerComponent} />
    <Screen name={AppRoute.SCHEDULE} component={Schedule} />
    <Screen name={AppRoute.QUIZ} component={QuizComponent} />
  </Navigator>
);

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(MainTabsNavigator);
