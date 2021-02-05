import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Text, Button } from "@ui-kitten/components";
import { BackIcon } from "../assets/icons";
// import { Button } from "galio-framework";

const TopBar = ({ children, title = "", back = false }) => {
  const navigation = useNavigation();

  const renderBackIcon = () => (
    <Button
      appearance="ghost"
      // status="danger"
      accessoryLeft={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );

  return (
    <View style={{ backgroundColor: "white", padding: 10 }}>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        {back && <View style={{ flex: 1 }}>{renderBackIcon()}</View>}
        <View style={{ flex: 8 }}>
          <Text
            category="h5"
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              color: "#6B66A8",
            }}
          >
            {children}
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
