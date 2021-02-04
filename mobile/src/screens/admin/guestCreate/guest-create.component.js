import { Button, Input, Text } from "@ui-kitten/components";
import { View } from "react-native";
import React, { useState } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import { selectLoading } from "./selectors";
import TopBar from "../../../components/topbar.component";

const GuestCreate = ({ createGuest, loading }) => {
  const [data, setData] = useState({
    name: "",
    phone_no: "",
  });
  const handleFormSubmit = async (value) => {
    try {
      await createGuest(data);
      setData({
        name: "",
        phone_no: "",
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <View>
      <TopBar back>Add Guest</TopBar>
      <View>
        <Input
          onChangeText={(value) =>
            setData({
              ...data,
              name: value,
            })
          }
          value={data["name"]}
          label="Name of The Guest"
        />
        <Input
          onChangeText={(value) =>
            setData({
              ...data,
              phone_no: value,
            })
          }
          value={data["phone_no"]}
          keyboardType="number-pad"
          label="Phone Number"
        />
        <Button disabled={loading} onPress={handleFormSubmit}>
          Add
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestCreate);
