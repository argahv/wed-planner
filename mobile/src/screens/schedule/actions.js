import { scheduleGet } from "../../api";
import * as types from "./types";

export const getScheduleRequest = (payload) => ({
  type: types.GET_SCHEDULE_REQUEST,
  payload,
});

export const getScheduleSuccess = (payload) => ({
  type: types.GET_SCHEDULE_SUCCESS,
  payload,
});
export const getScheduleFailure = (payload) => ({
  type: types.GET_SCHEDULE_FAILURE,
  payload,
});

export const getSchedule = () => async (dispatch) => {
  dispatch(getScheduleRequest());
  try {
    const response = await scheduleGet();
    console.log("response.data", response.data);
    dispatch(getScheduleSuccess(response.data.data));
    return response.data;
  } catch (error) {
    let errorMessage = "";
    if (error.response) {
      errorMessage = error.response.data.message;
      dispatch(getScheduleFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(getScheduleFailure(error.message));
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
