import React from "react";
import { StyleSheet } from "react-native";
import { Drawer, DrawerItem } from "@ui-kitten/components";
import { Text } from "galio-framework";

const DrawerHeader = () => (
  <>
    <Text h1>Welcome to the wedding</Text>
  </>
);

export const MainDrawer = (props) => {
  const onMenuItemSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createNavigationItemForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return {
      routeName: route.name,
      // @ts-ignore: all Drawer Screens strictly have string title
      title: options.title,
      // @ts-ignore: all Drawer Screens strictly have UI Kitten Icon
      icon: options.drawerIcon,
    };
  };

  return (
    <Drawer
      selectedIndex={props.state.index}
      header={DrawerHeader}
      onSelect={onMenuItemSelect}
    >
      {props.state.routes.map(createNavigationItemForRoute).map((each) => (
        <DrawerItem key={each.routeName} title={each.title} />
      ))}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});
