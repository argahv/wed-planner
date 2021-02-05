import React, { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
} from "react-native";
import { Button, Text } from "@ui-kitten/components";
import TopBar from "../../components/topbar.component";
import QuizCard from "./components/quiz-card.component";
import { selectUser } from "../../redux/global/selectors";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import { selectLoading, selectQuizQuestions } from "./selectors";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Quiz = ({ user, getQuiz, loading, quizAnswer, quizQuestions }) => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getQuiz();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getQuiz();
  }, []);

  const handleQuizSubmit = async () => {
    try {
      await quizAnswer();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView>
        <View>
          <TopBar title={user.name}>Quiz</TopBar>

          <View>
            {quizQuestions.map(({ question, options, key }, index) => {
              return (
                <QuizCard
                  questionIndex={index}
                  optionKey={key}
                  key={`${question}`}
                  title={question}
                  options={options}
                />
              );
            })}
          </View>
          <View style={{}}>
            <Button
              style={{
                backgroundColor: "#7E55A0",
                borderColor: "#7E55A0",
              }}
              disabled={loading}
              onPress={handleQuizSubmit}
            >
              Submit
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
  quizQuestions: selectQuizQuestions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

const styles = StyleSheet.create({});
