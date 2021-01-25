import { registerGuest } from "../../../api";
import * as types from "./types";
import Toast from "react-native-tiny-toast";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const createGuestRequest = (payload) => ({
  type: types.CREATE_GUEST_REQUEST,
  payload,
});
export const createGuestSuccess = (payload) => ({
  type: types.CREATE_GUEST_SUCCESS,
  payload,
});
export const createGuestFailure = (payload) => ({
  type: types.CREATE_GUEST_FAILURE,
  payload,
});

export const createGuest = (data) => async (dispatch, getState) => {
  dispatch(createGuestRequest(data));
  console.log("data", data);
  try {
    const response = await registerGuest(data);
    dispatch(createGuestSuccess(response.data));
    console.log("response.data", response.data);
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
      dispatch(createGuestFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(createGuestFailure(error.message));
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
