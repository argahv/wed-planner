import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import { Button, Text, ViewPager } from "@ui-kitten/components";
import { AppRoute } from "../../navigation/app-routes";
import { selectUser } from "../../redux/global/selectors";
import TopBar from "../../components/topbar.component";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

console.log("{SCREEN}", { SCREEN_WIDTH, SCREEN_HEIGHT });

const HomeTabs = ({ user, ...props }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const shouldLoadComponent = (index) => index === selectedIndex;
  return (
    <View style={{ backgroundColor: "white", height: SCREEN_HEIGHT }}>
      <TopBar>Welcome, {user.name}</TopBar>
      <ViewPager
        selectedIndex={selectedIndex}
        shouldLoadComponent={shouldLoadComponent}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <View style={{ margin: "auto" }}>
          <ImageBackground
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 2,
              margin: "auto",
            }}
            source={require("../../assets/1.jpg")}
          />
        </View>
        <View style={{ margin: "auto" }}>
          <ImageBackground
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 2,
              margin: "auto",
            }}
            source={require("../../assets/2.jpg")}
          />
        </View>
        <View style={{ margin: "auto" }}>
          <ImageBackground
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 2,
              margin: "auto",
            }}
            source={require("../../assets/3.jpg")}
          />
        </View>
      </ViewPager>
      <Text category="h5" style={{ color: "#6B66A8", textAlign: "center" }}>
        {selectedIndex + 1} /3
      </Text>
      <View style={{ marginTop: 10 }}>
        <Button
          category={"h5"}
          style={{
            textAlign: "center",
            margin: 10,
            backgroundColor: "#6B66A8",
            borderColor: "#6B66A8",
            borderWidth: 2,
            padding: 6,
          }}
          onPress={() => props.navigation.navigate(AppRoute.RSVP)}
        >
          RESPOND
        </Button>
      </View>
      {user.role === "admin" && (
        <Button
          category={"h5"}
          style={{
            textAlign: "center",
            margin: 10,
            backgroundColor: "#7E55A0",
            borderColor: "#7E55A0",
            borderWidth: 2,
            padding: 6,
          }}
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
