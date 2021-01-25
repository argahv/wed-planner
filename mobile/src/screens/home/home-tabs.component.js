import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import { Button } from "galio-framework";
import { AppRoute } from "../../navigation/app-routes";
import { selectUser } from "../../redux/global/selectors";
import TopBar from "../../components/topbar.component";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const HomeTabs = ({ user, ...props }) => {
  return (
    <View>
      <TopBar title={user.name}></TopBar>
      <View style={{ margin: "auto" }}>
        <ImageBackground
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT / 2,
            margin: "auto",
          }}
          source={require("../../assets/test.jpg")}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          style={{ width: SCREEN_WIDTH, margin: "auto" }}
          shadowColor="grey"
          round
          uppercase
          onPress={() => props.navigation.navigate(AppRoute.RSVP)}
        >
          RESPOND
        </Button>
      </View>
      {user.role === "admin" && (
        <Button
          style={{ width: SCREEN_WIDTH, marginTop: 2 }}
          shadowColor="grey"
          round
          uppercase
          onPress={() => props.navigation.navigate(AppRoute.ADMIN_PANEL)}
        >
          Inviter Panel
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
});
const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(HomeTabs);
