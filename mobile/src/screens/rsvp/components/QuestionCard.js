import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Radio, Card, RadioGroup } from "@ui-kitten/components";
import NumericInput from "rn-numeric-input";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
import { createStructuredSelector } from "reselect";
import { selectData } from "../selectors";

const QuestionCard = ({
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
    setDataValue({
      key: optionKey,
      value: selectedOption,
    });
  };
  const findTheIndex = () => {
    return options.map(({ value }) => value).indexOf(data[optionKey]);
  };

  const renderRadioButtons = () => {
    if (optionType.type === "radio") {
      return (
        <RadioGroup
          style={{ display: "flex", flexDirection: "row", margin: 4 }}
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
                checked={value === data[optionKey]}
                style={{ margin: 2, padding: 6 }}
                key={`${label}-radio-button`}
              >
                {(evaProps) => (
                  <Text
                    {...evaProps}
                    style={{
                      fontSize: 17,
                      marginLeft: 2,
                      color: "#7E55A0",
                      fontWeight: "bold",
                    }}
                  >
                    {label}
                  </Text>
                )}
              </Radio>
            );
          })}
        </RadioGroup>
      );
    }
    if (optionType.type === "numeric") {
      return options.map((option) => {
        return (
          <View
            style={{ display: "flex", flexDirection: "row", padding: 2 }}
            key={`${option.label}-numeric`}
          >
            <View style={{ flex: 4 }}>
              <Text
                style={{ color: "#7E55A0", fontWeight: "bold" }}
                category="h6"
              >
                {option.label}
              </Text>
            </View>
            <View style={{ flex: 1.5 }}>
              <NumericInput
                value={data[option.key]}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={100}
                totalHeight={35}
                iconSize={25}
                valueType="real"
                rounded
                onChange={(value) => setDataValue({ key: option.key, value })}
                textColor="#B0228C"
                iconStyle={{ color: "white" }}
                rightButtonBackgroundColor="#7E55A0"
                leftButtonBackgroundColor="#6B66A8"
              />
            </View>
          </View>
        );
      });
    }
  };

  return (
    <Card style={{ padding: 2, margin: 5, borderRadius: 10 }}>
      <Text category="h5" style={{ color: "#7E55A0" }}>
        {title}
      </Text>
      <View style={{ padding: 2 }}>
        <View style={{ margin: 10 }}>{renderRadioButtons()}</View>
      </View>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);

const styles = StyleSheet.create({});
