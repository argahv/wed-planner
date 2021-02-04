import { Card } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet, RefreshControl, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TopBar from "../../components/topbar.component";
import { selectUser } from "../../redux/global/selectors";
import RenderSchedule from "./component/list";
import * as mapDispatchToProps from "./actions";
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const ScheduleComponent = ({ user, getSchedule, ...props }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getSchedule();
  }, []);

  useEffect(() => {
    getSchedule();
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <TopBar title={user.name}>Schedule</TopBar>
      </View>
      <View>
        <Card>
          <RenderSchedule />
        </Card>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleComponent);

const styles = StyleSheet.create({});
