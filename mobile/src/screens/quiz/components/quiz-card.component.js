import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Radio, Card, RadioGroup } from "@ui-kitten/components";
import NumericInput from "rn-numeric-input";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
import { createStructuredSelector } from "reselect";
import { selectData } from "../selectors";

const QuizCard = ({
  questionIndex = 0,
  title = "",
  optionKey = "",
  options = [{ label: "l" }],
  optionType = { type: "", buttonType: "" },
  setDataValue,
  data,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleRadioChange = async (index) => {
    setSelectedIndex(index);
    let selectedOption = options[index].value;
    console.log("selectedOption", selectedOption);
    setDataValue({
      index: questionIndex,
      value: selectedOption,
    });
  };
  const findTheIndex = () => {
    return options.map(({ value }) => value).indexOf(data[questionIndex]);
  };
  console.log("data", data);

  const renderRadioButtons = () => {
    return (
      <RadioGroup
        style={{ display: "flex", flexDirection: "column", margin: 4 }}
        selectedIndex={findTheIndex()}
        onChange={handleRadioChange}
      >
        {options.map(({ label, value }, index) => {
          // console.log("data", {
          //   status: value === data[optionKey],
          //   data,
          //   value,
          //   optionValue: data[optionKey],
          //   index: findTheIndex(),
          // });
          return (
            <Radio
              checked={value === data[questionIndex]}
              style={{ margin: 2, padding: 6 }}
              key={`${label}-radio-button`}
            >
              {(evaProps) => (
                <Text {...evaProps} style={{ fontSize: 16, marginLeft: 2 }}>
                  {label}
                </Text>
              )}
            </Radio>
          );
        })}
      </RadioGroup>
    );
  };

  return (
    <Card style={{ padding: 2, margin: 5, borderRadius: 10 }}>
      <Text category="h5">{title}</Text>
      <View style={{ padding: 2 }}>
        <View style={{ margin: 10 }}>{renderRadioButtons()}</View>
      </View>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizCard);

const styles = StyleSheet.create({});
