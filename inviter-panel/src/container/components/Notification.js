import { notification } from "antd";

const openNotification = async (type, message, description, icon) => {
  return await notification[type]({
    message,
    description: description && description,
    icon: icon && icon
  });
};

export default openNotification;
