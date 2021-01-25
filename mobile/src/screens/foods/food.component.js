import { Card } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TopBar from "../../components/topbar.component";
import { selectUser } from "../../redux/global/selectors";
import RenderFoods from "./component/list";
import * as mapDispatchToProps from "./actions";

const FoodsComponent = ({ user, getFoods, ...props }) => {
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <View>
      <View>
        <TopBar title={user.name}>Foods</TopBar>
      </View>
      <View>
        <Card>
          <RenderFoods />
        </Card>
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsComponent);

const styles = StyleSheet.create({});
