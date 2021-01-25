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
      appearance="outline"
      // status="danger"
      accessoryLeft={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );

  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        {back && <View style={{ flex: 1 }}>{renderBackIcon()}</View>}
        <View style={{ flex: 8 }}>
          <Text category="h4" style={{ textAlign: "center" }}>
            Welcome,{" "}
            <Text category="h1" style={{ fontSize: 30, fontWeight: "bold" }}>
              {title}
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <Text
          category="h5"
          style={{ textAlign: "center", fontSize: 30, color: "grey" }}
        >
          {children}
        </Text>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
