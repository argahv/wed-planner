import React from "react";
import { Popconfirm, Button } from "antd";

const DeleteButton = props => {
  const confirm = () => {
    props.onDelete();
  };
  return (
    <Popconfirm
      placement="topLeft"
      title={`Are you sure you want to delete the ${props.title}?`}
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      <Button
        size={props.size && props.size}
        icon={props.icon && props.icon}
        shape={props.shape && props.shape}
        disabled={props.disabled}
        type="danger"
      >
        {props.children && props.children}
      </Button>
    </Popconfirm>
  );
};
export default DeleteButton;
