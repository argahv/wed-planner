import { selectData } from "./selectors";
import * as types from "./types";
import { updateAttend } from "../../api";
import Toast from "react-native-tiny-toast";

export const attendUpdateRequest = (payload) => ({
  type: types.ATTEND_UPDATE_REQUEST,
  payload,
});
export const attendUpdateSuccess = (payload) => ({
  type: types.ATTEND_UPDATE_SUCCESS,
  payload,
});

export const attendUpdateFailure = (payload) => ({
  type: types.ATTEND_UPDATE_FAILURE,
  payload,
});

export const attendUpdate = (data) => async (dispatch, getState) => {
  dispatch(attendUpdateRequest(data));
  try {
    const response = await updateAttend(data);
    dispatch(attendUpdateSuccess(response.data));
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
      dispatch(attendUpdateFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(attendUpdateFailure(error.message));
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
