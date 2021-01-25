import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";

const Title = ({ children, ...props }) => {
  return (
    <View>
      <Text
        category="h6"
        style={{
          color: "grey",
          fontSize: 14,
          fontFamily: "AllertaStencil_400Regular",
        }}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
