import {
  Button,
  Input,
  Text,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { View, Platform } from "react-native";
import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";
import { selectLoading } from "./selectors";

const selectorValues = [
  {
    key: "food_preference",
    values: [
      {
        label: "Non-veg",
        value: "non-veg",
      },
      {
        label: "Veg",
        value: "veg",
      },
    ],
  },
  {
    key: "food_type",
    values: [
      {
        label: "Dinner",
        value: "dinner",
      },
      {
        label: "lunch",
        value: "lunch",
      },
    ],
  },
];

const AddFoods = ({ createFoods, loading }) => {
  const [data, setData] = useState({
    food_preference: "",
    food_type: "",
    title: "",
    description: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const handleFormSubmit = async (value) => {
    try {
      await createFoods(data);
      setData({
        food_preference: "",
        food_type: "",
        title: "",
        description: "",
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSelect = (selectedKey, selectedIndex, mainIndex) => {
    setSelectedIndex(selectedIndex);
    let selectObject = {
      [selectedKey]: selectorValues[mainIndex].values[selectedIndex.row].value,
    };
    setData({
      ...data,
      ...selectObject,
    });
  };
  console.log("data", data);

  const handleSelectorRender = () => {
    return selectorValues.map(({ key, values }, index) => {
      return (
        <Select
          label={key}
          key={key}
          selectedIndex={selectedIndex}
          onSelect={(selectIndex) => handleSelect(key, selectIndex, index)}
        >
          {values.map(({ value, label }) => (
            <SelectItem title={label} />
          ))}
        </Select>
      );
    });
  };
  return (
    <View style={{ padding: 10 }}>
      <Text category="h4">Add Foods List</Text>

      <View>
        <Input
          multiline
          onChangeText={(value) =>
            setData({
              ...data,
              title: value,
            })
          }
          value={data["title"]}
          label="Title"
        />
        <Input
          multiline
          onChangeText={(value) =>
            setData({
              ...data,
              description: value,
            })
          }
          value={data["description"]}
          label="Description"
        />
        {handleSelectorRender()}

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

export default connect(mapStateToProps, mapDispatchToProps)(AddFoods);
