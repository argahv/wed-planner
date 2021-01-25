import React from "react";
import { Input } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import { AlertTriangleIcon } from "../assets/icons";

export const FormInput = ({ id, inputError = "", ...inputProps }) => {
  const formContext = useFormikContext();

  let { [id]: error } = formContext.errors;

  if (inputError) {
    error = inputError;
  }

  const fieldProps = {
    status: error && "danger",
    captionIcon: error && AlertTriangleIcon,
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      caption={error}
      onChangeText={formContext.handleChange(id)}
    />
  );
};
