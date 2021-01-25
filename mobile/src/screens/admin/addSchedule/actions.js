import { createSchedule } from "../../../api";
import * as types from "./types";
import Toast from "react-native-tiny-toast";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const scheduleCreateRequest = (payload) => ({
  type: types.POST_SCHEDULE_REQUEST,
  payload,
});
export const scheduleCreateSuccess = (payload) => ({
  type: types.POST_SCHEDULE_SUCCESS,
  payload,
});

export const scheduleCreateFailure = (payload) => ({
  type: types.POST_SCHEDULE_FAILURE,
  payload,
});

export const scheduleCreate = (data) => async (dispatch, getState) => {
  try {
    const response = await createSchedule(data);
    dispatch(scheduleCreateSuccess(response.data));
    const toast = Toast.showSuccess(response.data.message);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 1000);
    });
    return response.data;
  } catch (error) {
    let errorMessage = "";
    if (error.response) {
      errorMessage = error.response.data.message;
      dispatch(scheduleCreateFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(scheduleCreateFailure(error.message));
    }
    const toast = Toast.show(errorMessage, {
      position: 0,
      // textColor: '#f00',
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });
    throw error;
  }
};
