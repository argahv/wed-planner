import { guestList } from "../../../api";
import * as types from "./types";
import Toast from "react-native-tiny-toast";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const listGuestRequest = (payload) => ({
  type: types.LIST_GUEST_REQUEST,
  payload,
});

export const listGuestSuccess = (payload) => ({
  type: types.LIST_GUEST_SUCCESS,
  payload,
});
export const listGuestFailure = (payload) => ({
  type: types.LIST_GUEST_FAILURE,
  payload,
});

export const listGuest = () => async (dispatch, getState) => {
  dispatch(listGuestRequest());
  try {
    const response = await guestList();
    dispatch(listGuestSuccess(response.data));
    const toast = Toast.showSuccess(response.data.user.length);
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
      dispatch(listGuestFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(listGuestFailure(error.message));
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
