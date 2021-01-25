import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Card } from "antd";
import openNotification from "../../components/Notification";
import { useInjectReducer } from "../../../utils/injectReducer";
import { login } from "./actions";
import { createStructuredSelector } from "reselect";
import { selectLoading, reduxKey } from "./selectors";
import reducer from "./reducer";
import { navigate } from "@reach/router";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = ({ login, loading, ...props }) => {
  useInjectReducer({ key: reduxKey, reducer });

  const [data, setData] = useState({
    phone_no: "",
  });

  const onFinish = async () => {
    try {
      await login(data);
      openNotification("success", "Successfully Logged In, Redirecting...");
      // navigate("/");
    } catch (error) {
      console.log("error", error.response);
      if (error.response.data) {
        openNotification("error", error.response.data.error);
      }
    }
  };

  const onFinishFailed = async (errorInfo) => {
    const successLogin = await login(data);
    console.log("errorInfo", successLogin);
    openNotification("error", JSON.stringify(errorInfo));
  };

  const handleChange = (e, name) => {
    const { value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Card
      style={{
        width: "50%",
        margin: "auto",
        position: "relative",
        top: "3rem",
      }}
    >
      {/* <TitleHeader>Poultry</TitleHeader>
      <TitleHeader style={{ fontSize: 60, textAlign: "center" }}>
        Log into your account{" "}
      </TitleHeader> */}
      <h1 style={{ fontSize: 40, textAlign: "center" }}>Inviter Panel</h1>
      <Form
        {...layout}
        // name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        

        <Form.Item
          name="phone_no"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone_no!",
            },
          ]}
        >
          <Input
            onChange={(e) => handleChange(e, "phone_no")}
            style={{ width: 200 }}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            style={{ width: 200 }}
            loading={loading}
            disabled={loading}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps, { login })(Login);
