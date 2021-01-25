import { Button, Input, List, ListItem, Text } from "@ui-kitten/components";
import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import { selectData, selectGuestList, selectLoading } from "./selectors";

const GuestList = ({ listGuest, loading, guests, ...props }) => {
  console.log("data", guests, "p", props.data);
  useEffect(() => {
    listGuest();
  }, []);
  const renderGuestList = () => {
    return guests.map((guest) => {
      return (
        <View key={guest.phone_no}>
          <ListItem title={guest.name} description={guest.phone_no} />
        </View>
      );
    });
  };
  return (
    <View>
      <Text category="h4">Guest List</Text>
      <View>
        <List data={guests} renderItem={renderGuestList} />
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  guests: selectGuestList,
  data: selectData,
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);
