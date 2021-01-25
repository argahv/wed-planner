import React, { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "@ui-kitten/components";
import TopBar from "../../components/topbar.component";
import QuestionCard from "./components/QuestionCard";
import { questionCollection } from "./components/questions";
import { selectUser } from "../../redux/global/selectors";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import { selectLoading } from "./selectors";
import { update } from "lodash";

const RSVP = ({ user, rsvpUpdate, loading, getRSVP }) => {
  useEffect(() => {
    getRSVP();
  }, []);

  const handleRSVPButton = async () => {
    try {
      await rsvpUpdate();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <TopBar back title={user.name}>
            RSVP
          </TopBar>
          <View>
            {questionCollection.map(({ title, options, optionType, key }) => {
              return (
                <QuestionCard
                  optionKey={key}
                  key={`${title}`}
                  optionType={optionType}
                  title={title}
                  options={options}
                />
              );
            })}
          </View>
          <View style={{}}>
            <Button disabled={loading} onPress={handleRSVPButton}>
              Respond
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  loading: selectLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(RSVP);

const styles = StyleSheet.create({});
