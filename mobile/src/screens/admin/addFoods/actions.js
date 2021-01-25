import { foodsCreate } from "../../../api";
import * as types from "./types";
import Toast from "react-native-tiny-toast";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const createFoodsRequest = (payload) => ({
  type: types.CREATE_FOODS_REQUEST,
  payload,
});
export const createFoodsSuccess = (payload) => ({
  type: types.CREATE_FOODS_SUCCESS,
  payload,
});

export const createFoodsFailure = (payload) => ({
  type: types.CREATE_FOODS_FAILURE,
  payload,
});

export const createFoods = (data) => async (dispatch, getState) => {
  try {
    const response = await foodsCreate(data);
    dispatch(createFoodsSuccess(response.data));
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
      dispatch(createFoodsFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(createFoodsFailure(error.message));
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
