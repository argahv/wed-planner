import React from "react";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export const questionCollection = [
  {
    title: "About the invitation, I am",
    optionType: {
      type: "radio",
      buttonType: "text",
    },
    key: "attending",
    options: [
      {
        label: "able to attend",
        value: true,
      },
      {
        label: "NOT able to attend",
        value: false,
      },
    ],
  },
  {
    title: "I am from the",
    optionType: {
      type: "radio",
      buttonType: "text",
    },
    key: "side",
    options: [
      {
        label: "Bride side",
        value: "bride",
      },
      {
        label: "Groom side",
        value: "groom",
      },
    ],
  },
  {
    title: "Guest Information",
    optionType: {
      type: "numeric",
      buttonType: "text",
    },
    key: "guests",
    options: [
      {
        label: "No. of Guests[Including Yourself]",
        key: "guest_no",
        value: 0,
      },
      {
        label: "No. of Children[If any]",
        key: "children_no",
        value: 0,
      },
    ],
  },
  {
    title: "Choice of drinks",
    optionType: {
      type: "radio",
      buttonType: "text",
    },
    key: "drink_choice",
    options: [
      {
        label: <Ionicons name="wine-outline" size={40} color="#7E55A0" />,
        value: "wine",
      },
      {
        label: <FontAwesome5 name="glass-whiskey" size={39} color="#7E55A0" />,
        value: "whisky",
      },
      {
        label: <Ionicons name="ios-beer-outline" size={40} color="#7E55A0" />,
        value: "beer",
      },
      {
        label: <MaterialIcons name="no-drinks" size={40} color="#7E55A0" />,
        value: "no-drinking",
      },
    ],
  },
  {
    title: "I am a",
    optionType: {
      type: "radio",
      buttonType: "text",
    },
    key: "food_preference",
    options: [
      {
        label: "vegeterian",
        value: "veg",
      },
      {
        label: "non-vegeterian",
        value: "non-veg",
      },
    ],
  },
  {
    title: "Accommodation, I am",
    optionType: {
      type: "radio",
      buttonType: "text",
    },
    key: "accommodation",
    options: [
      {
        label: "staying over",
        value: "staying",
      },
      {
        label: "NOT staying over",
        value: "not-staying",
      },
    ],
  },
  {
    title: "Travel, I",
    key: "travel",
    optionType: {
      type: "radio",
      buttonType: "text",
    },
    options: [
      {
        label: "come by my own",
        value: "own-vehicle",
      },
      {
        label: "need to get picked",
        value: "get-picked",
      },
    ],
  },
];
