import React from "react";
import { Dimensions, StyleSheet, Text, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { Button, Layout } from "@ui-kitten/components";
import { Formik } from "formik";
import { AppRoute } from "../../navigation/app-routes";
import { FormInput } from "../../components/form-input.component";
import { EyeIcon, EyeOffIcon } from "../../assets/icons";
import { SignInData, SignInSchema } from "../../data/sign-in.model";
import { loginUser } from "../../redux/global/actions";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

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
        textStyle={{
          color: "#6B66A8",
          fontSize: 23,
          padding: 10,
        }}
        id="phone_no"
        style={styles.formControl}
        placeholder="Please Enter Your Phone Number"
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
    <Layout style={{ backgroundColor: "#C2C2DE", height: SCREEN_HEIGHT }}>
      <ImageBackground
        style={{ height: SCREEN_HEIGHT / 4, width: SCREEN_WIDTH }}
        source={require("../../assets/login-logo.jpg")}
      />
      {/* <Text style={styles.formTitle}>Welcome to the wedding</Text> */}
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
    marginTop: 30,
    borderColor: "#6B66A8",
    fontSize: 40,
    backgroundColor: "#e8e8e8",
  },
  submitButton: {
    marginVertical: 24,
    backgroundColor: "#7E55A0",
    borderColor: "#7E55A0",
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
