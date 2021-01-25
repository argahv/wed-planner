import { Button, Form } from "antd";
import React from "react";
import useInjectReducer from "../../../../utils/injectReducer";
import InputGuest from "./component/InputGuest";
import { createStructuredSelector } from "reselect";
import openNotification from "../../../components/Notification";
import { reduxKey } from "./selectors";
import reducer from "./reducers";
import { connect } from "react-redux";
import * as mapDispatchToProps from "./actions";

const Create = ({ createGuest }) => {
  useInjectReducer({ key: reduxKey, reducer });

  const [form] = Form.useForm();
  const handleFormSubmit = async (value) => {
    try {
      const incomeEntrySuccess = await createGuest();
      openNotification("success", incomeEntrySuccess.message);
      form.resetFields();
    } catch (err) {
      if (err.message) {
        openNotification("error", err.message.toUpperCase());
      }
    }
  };

  return (
    <div>
      Create Guest
      <Form onFinish={handleFormSubmit} form={form}>
        <InputGuest label="Name" name="name" placeholder="Name of the Guest" />
        <InputGuest
          label="Phone Number"
          name="phone_no"
          placeholder="Phone Number of the Guest"
          type="number"
        />
        <Form.Item>
          <Button htmlType="submit">Add</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
