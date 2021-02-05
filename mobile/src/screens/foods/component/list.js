import React from "react";
import { Divider, Text, List } from "@ui-kitten/components";

import { StyleSheet, View, RefreshControl } from "react-native";
import moment from "moment";
import { createStructuredSelector } from "reselect";
import { selectData } from "../selectors";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const RenderFoods = ({ data, getFoods, ...props }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getFoods();
  }, []);

  const renderItem = ({ item, index }) => (
    <View
      style={{
        // display: "flex",
        // flexDirection: "row",
        padding: 10,
        margin: 4,
        backgroundColor: "white",
        borderColor: "white",
      }}
    >
      <>
        <View style={{ display: "flex", flexDirection: "row", flex: 4 }}>
          <View style={{ flex: 2 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#6B66A8" }}
            >
              {item.title}
            </Text>
            <Text style={{ color: "grey" }}>{item.description}</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              margin: 1,
              color: "#7E55A0",
              borderColor:
                item.type === "Dinner".toLowerCase() ? "blue" : "purple",
              borderWidth: 1,
              fontSize: 20,
              textAlign: "center",
              borderRadius: 2,
              fontWeight: "bold",
              maxWidth: 100,
            }}
          >
            {item.food_type}
          </Text>
          <Text
            style={{
              margin: 1,
              color: "#6B66A8",
              borderColor:
                item.food_preference === "Veg".toLowerCase()
                  ? "green"
                  : "#bd3508",
              borderWidth: 1,
              fontSize: 20,
              textAlign: "center",
              // color: "white",
              borderRadius: 2,
              fontWeight: "bold",
              maxWidth: 100,
            }}
          >
            {item.food_preference}
          </Text>
        </View>
      </>
    </View>
  );

  return (
    <List
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ItemSeparatorComponent={Divider}
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 192,
    backgroundColor: "white",
  },
});

const mapStateToProps = createStructuredSelector({
  data: selectData,
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderFoods);
