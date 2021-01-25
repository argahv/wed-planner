import { Card } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet, RefreshControl, View } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TopBar from "../../components/topbar.component";
import { selectUser } from "../../redux/global/selectors";
import RenderSchedule from "./component/list";
import * as mapDispatchToProps from "./actions";

const ScheduleComponent = ({ user, getSchedule, ...props }) => {
  useEffect(() => {
    getSchedule();
  }, []);
  return (
    <View>
      <View>
        <TopBar title={user.name}>Schedule</TopBar>
      </View>
      <View>
        <Card>
          <RenderSchedule />
        </Card>
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleComponent);

const styles = StyleSheet.create({});
