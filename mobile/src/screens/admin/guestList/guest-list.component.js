import { View, StyleSheet, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "@ui-kitten/components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import TopBar from "../../../components/topbar.component";
import ListItems from "./components/ListItems";

const GuestList = ({ listGuest, loading, ...props }) => {
  const [data, setData] = useState({
    info: [],
    user: [],
    quizScores: [],
  });

  const fetch = async () => {
    const fetched = await listGuest();
    setData(fetched);
  };

  const { info, user, quizScores } = data;

  useEffect(() => {
    fetch();
  }, []);

  return (
    <ScrollView>
      <TopBar back>Guests</TopBar>
      <View>
        <Card>
          <Text style={styles.infoText}>
            Total Children:{info[0]?.total_children_no}
          </Text>

          <Text style={styles.infoText}>
            Total Guests:{info[0]?.total_no_guest}
          </Text>
          <Text style={styles.infoText}>
            Total Staying Over:{info[0]?.total_staying_over}
          </Text>
          <Text style={styles.infoText}>
            Total Vegeterians:{info[0]?.total_veg}
          </Text>
        </Card>
      </View>
      <View>
        <ListItems data={quizScores} title="Top Quiz Scores" />
        <ListItems
          data={info[0]?.guestNeedToGetPicked}
          title="Guests Needed To Be Picked"
        />
        <ListItems data={user} title="All Guests" />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = createStructuredSelector({});

const styles = StyleSheet.create({
  infoText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);
