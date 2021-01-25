import { foodsGet } from "../../api";
import * as types from "./types";

export const getFoodsRequest = (payload) => ({
  type: types.GET_FOODS_REQUEST,
  payload,
});

export const getFoodsSuccess = (payload) => ({
  type: types.GET_FOODS_SUCCESS,
  payload,
});
export const getFoodsFailure = (payload) => ({
  type: types.GET_FOODS_FAILURE,
  payload,
});

export const getFoods = () => async (dispatch) => {
  dispatch(getFoodsRequest());
  try {
    const response = await foodsGet();
    dispatch(getFoodsSuccess(response.data.data));
    return response.data;
  } catch (error) {
    let errorMessage = "";
    if (error.response) {
      errorMessage = error.response.data.message;
      dispatch(getFoodsFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(getFoodsFailure(error.message));
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
