import { createQuiz } from "../../../api";
import * as types from "./types";
import Toast from "react-native-tiny-toast";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const quizCreateRequest = (payload) => ({
  type: types.POST_QUIZ_REQUEST,
  payload,
});
export const quizCreateSuccess = (payload) => ({
  type: types.POST_QUIZ_SUCCESS,
  payload,
});

export const quizCreateFailure = (payload) => ({
  type: types.POST_QUIZ_FAILURE,
  payload,
});

export const quizCreate = (data) => async (dispatch, getState) => {
  dispatch(quizCreateRequest(data));
  try {
    const response = await createQuiz(data);
    dispatch(quizCreateSuccess(response.data));
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
      dispatch(quizCreateFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(quizCreateFailure(error.message));
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
