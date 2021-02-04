import { Card } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet, View, RefreshControl, ScrollView } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TopBar from "../../components/topbar.component";
import { selectUser } from "../../redux/global/selectors";
import RenderFoods from "./component/list";
import * as mapDispatchToProps from "./actions";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const FoodsComponent = ({ user, getFoods, ...props }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getFoods();
  }, []);

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <TopBar title={user.name}>Foods</TopBar>
      </View>
      <View>
        <Card>
          <RenderFoods />
        </Card>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsComponent);

const styles = StyleSheet.create({});
