import { Button, Input, Text } from "@ui-kitten/components";
import { View, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import { selectLoading } from "./selectors";
import moment from "moment";
import TopBar from "../../../components/topbar.component";

const AddSchedule = ({ scheduleCreate, loading }) => {
  const [data, setData] = useState({
    time: Date.now(),
    title: "",
    description: "",
    event_title: "",
  });
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  console.log("data", data);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data.time;
    setShow(Platform.OS === "ios");
    setData({
      ...data,
      time: currentDate,
    });
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const handleFormSubmit = async (value) => {
    try {
      await scheduleCreate(data);
      setData({
        time: Date.now(),
        title: "",
        description: "",
        event_title: "",
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TopBar back>Add Schedule</TopBar>
      <Input
        multiline
        onChangeText={(value) =>
          setData({
            ...data,
            event_title: value,
          })
        }
        value={data["event_title"]}
        label="Title of the Event"
      />
      <View style={{ display: "flex", flexDirection: "row", padding: 2 }}>
        <View style={{ flex: 5 }}>
          <Button appearance="ghost" onPress={showDatepicker}>
            Date
          </Button>
        </View>
        <View style={{ flex: 5 }}>
          <Button appearance="ghost" onPress={showTimepicker}>
            Time
          </Button>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={data.time}
            mode={mode}
            // is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
      <View>
        <Text style={{ textAlign: "center", color: "purple" }} category="h5">
          Scheduled for: {moment(data.time).format("DD MMM ,hA ")}
        </Text>
        <Input
          multiline
          onChangeText={(value) =>
            setData({
              ...data,
              title: value,
            })
          }
          value={data["title"]}
          label="Title"
        />
        <Input
          multiline
          onChangeText={(value) =>
            setData({
              ...data,
              description: value,
            })
          }
          value={data["description"]}
          label="Description"
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

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedule);
