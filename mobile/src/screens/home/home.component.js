import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button, Text, ViewPager } from "@ui-kitten/components";
import { AppRoute } from "../../navigation/app-routes";
import { selectUser } from "../../redux/global/selectors";
import TopBar from "../../components/topbar.component";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const HomeTabs = ({ user, ...props }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const shouldLoadComponent = (index) => index === selectedIndex;
  return (
    <ScrollView>
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
                height: SCREEN_HEIGHT / 1.55,
                margin: "auto",
              }}
              source={require("../../assets/3.png")}
            />
          </View>
          <View style={{ margin: "auto" }}>
            <ImageBackground
              style={{
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT / 1.55,
                margin: "auto",
              }}
              source={require("../../assets/4.png")}
            />
          </View>
          <View style={{ margin: "auto" }}>
            <ImageBackground
              style={{
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT / 1.55,
                margin: "auto",
              }}
              source={require("../../assets/5.png")}
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
    </ScrollView>
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
