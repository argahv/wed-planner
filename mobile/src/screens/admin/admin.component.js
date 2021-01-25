import { Button } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppRoute } from "../../navigation/app-routes";

const AdminComponent = ({ navigation }) => {
  return (
    <View>
      <Text>Inviter Panel</Text>
      <Button onPress={() => navigation.navigate(AppRoute.GUEST_CREATE)}>
        Create Guest
      </Button>
      <Button onPress={() => navigation.navigate(AppRoute.GUEST_LIST)}>
        View Guest List
      </Button>
      <Button onPress={() => navigation.navigate(AppRoute.ADD_QUIZ)}>
        Add Quiz
      </Button>
      <Button onPress={() => navigation.navigate(AppRoute.ADD_FOODS)}>
        Add Food List
      </Button>
      <Button onPress={() => navigation.navigate(AppRoute.ADD_SCHEDULE)}>
        Add Schedule
      </Button>
    </View>
  );
};

export default AdminComponent;

const styles = StyleSheet.create({});
