import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { AppRoute } from "../../navigation/app-routes";
import { selectUser } from "../../redux/global/selectors";
import TopBar from "../../components/topbar.component";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const HomeTabs = ({ user, ...props }) => {
  return (
    <View>
      <TopBar>Welcome, {user.name}</TopBar>
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
        <Text
          category={"h5"}
          style={{
            textAlign: "center",
            margin: 10,
            color: "#396cad",
            borderColor: "#396cad",
            backgroundColor: "white",
            borderWidth: 2,
            padding: 6,
          }}
          onPress={() => props.navigation.navigate(AppRoute.RSVP)}
        >
          RESPOND
        </Text>
      </View>
      {user.role === "admin" && (
        <Text
          category={"h5"}
          style={{
            textAlign: "center",
            margin: 10,
            color: "#32a852",
            borderColor: "#32a852",
            borderWidth: 2,
            backgroundColor: "white",
            padding: 6,
          }}
          onPress={() => props.navigation.navigate(AppRoute.ADMIN_PANEL)}
        >
          Inviter Panel
        </Text>
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
