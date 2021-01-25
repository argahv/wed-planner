import { selectData } from "./selectors";
import * as types from "./types";
import { createQuiz, quizGet, answerQuiz } from "../../api";
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

export const quizCreate = () => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(quizCreateRequest(data));
  try {
    const response = await createQuiz(data);
    dispatch(quizCreateSuccess(response.data));
    const toast = Toast.showSuccess("Quiz Answered");
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

export const getQuizRequest = (payload) => ({
  type: types.GET_QUIZ_REQUEST,
  payload,
});
export const getQuizSuccess = (payload) => ({
  type: types.GET_QUIZ_SUCCESS,
  payload,
});

export const getQuizFailure = (payload) => ({
  type: types.GET_QUIZ_FAILURE,
  payload,
});

export const getQuiz = () => async (dispatch) => {
  dispatch(getQuizRequest());
  try {
    const response = await quizGet();
    dispatch(getQuizSuccess(response.data.data));
    return response.data;
  } catch (error) {
    let errorMessage = "";
    if (error.response) {
      errorMessage = error.response.data.message;
      dispatch(getQuizFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(getQuizFailure(error.message));
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

export const quizAnswerRequest = (payload) => ({
  type: types.ANSWER_QUIZ_REQUEST,
  payload,
});
export const quizAnswerSuccess = (payload) => ({
  type: types.ANSWER_QUIZ_SUCCESS,
  payload,
});

export const quizAnswerFailure = (payload) => ({
  type: types.ANSWER_QUIZ_FAILURE,
  payload,
});

export const quizAnswer = () => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(quizAnswerRequest(data));
  try {
    const response = await answerQuiz(data);
    dispatch(quizAnswerSuccess(response.data));
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
      dispatch(quizAnswerFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(quizAnswerFailure(error.message));
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
