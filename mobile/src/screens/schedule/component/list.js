import React from "react";
import { Divider, Text, List } from "@ui-kitten/components";

import { StyleSheet, View, RefreshControl } from "react-native";
import moment from "moment";
import { createStructuredSelector } from "reselect";
import { selectData, selectDataS } from "../selectors";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const RenderSchedule = ({ data, getSchedule, dataS, ...props }) => {
  console.log("dataS", dataS);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getSchedule();
  }, []);

  console.log("data", data);

  const renderItem = ({ item, index }) => (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 10,
          // color: "violet",
          borderColor: "blue",
        }}
      >
        {moment(item.time).format("MMM DD")} -
        <Text
          style={{
            color: "purple",
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 10,
          }}
        >
          {item.event_title}
        </Text>
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          margin: 4,
          backgroundColor: "white",
          borderColor: "white",
        }}
      >
        <View style={{ flex: 4 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
              borderColor: "blue",
            }}
          >
            {moment(item.time).format(" hA")}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", flex: 6 }}>
          <View style={{ flex: 4 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {item.title}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text>{item.description}</Text>
          </View>
        </View>
      </View>
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
  dataS: selectDataS,
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderSchedule);
