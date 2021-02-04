import { Button, Input, Text } from "@ui-kitten/components";
import { View } from "react-native";
import React, { useState } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import { selectLoading } from "./selectors";
import TopBar from "../../../components/topbar.component";

const AddQuiz = ({ quizCreate, loading }) => {
  const [data, setData] = useState({
    question: "",
    answer: "",
    options: "",
  });
  const handleFormSubmit = async (value) => {
    try {
      await quizCreate(data);
      setData({
        question: "",
        answer: "",
        options: "",
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <View>
      <TopBar back>Add Quiz Questions</TopBar>

      <View>
        <Input
          multiline
          onChangeText={(value) =>
            setData({
              ...data,
              question: value,
            })
          }
          value={data["question"]}
          label="Question"
        />
        <Input
          multiline
          onChangeText={(value) =>
            setData({
              ...data,
              answer: value,
            })
          }
          value={data["answer"]}
          label="The Answer"
        />
        <Input
          multiline
          onChangeText={(value) =>
            setData({
              ...data,
              options: value,
            })
          }
          value={data["options"]}
          label="Options"
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

export default connect(mapStateToProps, mapDispatchToProps)(AddQuiz);
