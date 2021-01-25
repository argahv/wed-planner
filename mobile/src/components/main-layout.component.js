import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { Toolbar } from "./toolbar.component";
import { MenuIcon, InfoIcon, LogoutIcon, BackIcon } from "../assets/icons";
import { AppRoute } from "../navigation/app-routes";
import { SafeAreaLayout, SaveAreaInset } from "./safe-area-layout.component";
import { logoutUser } from "../redux/global/actions";

const MainLayout = ({ title = "", navigation, children, ...props }) => {
  console.log("navigation", navigation);
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={
          <Text category="h4" style={{ textAlign: "center", margin: 10 }}>
            Welcome,{" "}
            <Text category="h1" style={{ fontSize: 40 }}>
              {title}
            </Text>
          </Text>
        }
        backIcon={BackIcon}
        onBackPress={navigation.goBack()}
        // menu={menu}
      />
      <Divider />
      {/* <Layout style={styles.container}>{children}</Layout> */}
    </SafeAreaLayout>
  );
};

const mapDispatchToProps = {
  logoutUser,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
