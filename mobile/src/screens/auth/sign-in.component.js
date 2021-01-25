import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Button, Layout } from "@ui-kitten/components";
import { Formik } from "formik";
import { AppRoute } from "../../navigation/app-routes";
import { FormInput } from "../../components/form-input.component";
import { EyeIcon, EyeOffIcon } from "../../assets/icons";
import { SignInData, SignInSchema } from "../../data/sign-in.model";
import { loginUser } from "../../redux/global/actions";

const SignInScreen = (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [inputError, setInputError] = React.useState("");

  const onFormSubmit = async (values) => {
    console.log(values.password, "signing in with values");
    try {
      console.log(values);
      setDisabled(true);
      await props.loginUser(values);
      setDisabled(false);
      props.navigation.navigate(AppRoute.MAIN);
    } catch (err) {
      console.log("err", err);
      setDisabled(false);
      if (
        err.response &&
        err.response.data &&
        err.response.data.error &&
        typeof err.response.data.error === "string"
      ) {
        setInputError(err.response.data.error);
      } else {
        setInputError("Something went wrong");
      }
    }
  };

  const navigateResetPassword = () => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderForm = (formProps) => (
    <React.Fragment>
      <FormInput
        id="phone_no"
        style={styles.formControl}
        placeholder="Phone Number"
        keyboardType="numeric"
        inputError={inputError}
      />

      <Button
        style={styles.submitButton}
        onPress={formProps.handleSubmit}
        disabled={disabled}
      >
        Get In
      </Button>
    </React.Fragment>
  );

  return (
    <Layout>
      <Text style={styles.formTitle}>Login</Text>
      {/* <Layout style={styles.formContainer}> */}
      <Formik
        initialValues={SignInData.empty()}
        validationSchema={SignInSchema}
        onSubmit={onFormSubmit}
      >
        {renderForm}
      </Formik>
      {/* </Layout> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  resetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formControl: {
    marginVertical: 4,
    padding: 10,
    fontSize: 40,
  },
  submitButton: {
    marginVertical: 24,
  },
  noAccountButton: {
    alignSelf: "center",
  },
  formTitle: {
    fontSize: 40,
    textAlign: "center",
    padding: 30,
  },
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(SignInScreen);
