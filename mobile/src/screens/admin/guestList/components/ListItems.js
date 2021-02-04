import React from "react";
import { StyleSheet, View, Linking } from "react-native";
import { Card, Text, List, ListItem } from "@ui-kitten/components";

const ListItems = ({ title = "", data = [] }) => {
  const renderListItem = ({ item }) => (
    <View key={item.phone_no}>
      <ListItem
        title={<Text>{item.name}</Text>}
        description={
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              onPress={() => Linking.openURL(`tel:+977${item.phone_no}`)}
              style={{
                flex: 2,
                padding: 2,
                margin: 2,
                color: "#416da6",
                fontWeight: "500",
              }}
            >
              {item.phone_no}
            </Text>
            <Text style={{ flex: 2, padding: 2, margin: 2 }}>
              {item.side.toUpperCase()}
            </Text>

            <Text style={{ flex: 2, padding: 2, margin: 2 }}>
              {item.drink_choice}
            </Text>
            <Text
              style={{
                flex: 2,
                padding: 2,
                margin: 2,
                color: item.has_attended ? "green" : "grey",
              }}
            >
              {item.has_attended ? "Attended" : "Not Attended"}
            </Text>
            <Text
              style={{
                flex: 2,
                padding: 2,
                margin: 2,
                color: item.food_preference === "veg" ? "green" : "red",
              }}
            >
              {item.food_preference}
            </Text>
          </View>
        }
      />
    </View>
  );

  return (
    <Card>
      <Text category="h5">{title}</Text>
      <List data={data} renderItem={renderListItem} />
    </Card>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
