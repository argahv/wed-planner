import Toast from "react-native-tiny-toast";
import * as types from "./types";
import { userDetailGet, clientDetailGet, loginPost, api } from "../../api";

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});

export const loginUserRequest = (payload) => ({
  type: types.LOGIN_USER_REQUEST,
  payload,
});
export const loginUserSuccess = (payload) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload,
});
export const loginUserFailure = (payload) => ({
  type: types.LOGIN_USER_FAILURE,
  payload,
});

export const loginUser = (payload) => async (dispatch) => {
  dispatch(loginUserRequest(payload));
  try {
    const response = await loginPost(payload);
    dispatch(loginUserSuccess(response.data));
    const token = `Bearer ${response.data.token}`;
    api.defaults.headers.common.Authorization = token;
    dispatch(setToken(token));
    const toast = Toast.showSuccess(response.data.message);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });
    return response.data;
  } catch (err) {
    let errorMessage = "";
    if (err.response) {
      errorMessage = err.response.data.error;
      dispatch(loginUserFailure(err.response.data));
    } else {
      errorMessage = err.message;
      dispatch(loginUserFailure(err.message));
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
    throw err;
  }
};

export const getUserRequest = (payload) => ({
  type: types.GET_USER_REQUEST,
  payload,
});
export const getUserSuccess = (payload) => ({
  type: types.GET_USER_SUCCESS,
  payload,
});
export const getUserFailure = (payload) => ({
  type: types.GET_USER_FAILURE,
  payload,
});

export const getUser = (payload) => async (dispatch) => {
  dispatch(getUserRequest(payload));
  try {
    const response = await userDetailGet();
    dispatch(getUserSuccess(response.data.user));
  } catch (err) {
    if (err.response) {
      dispatch(getUserFailure(err.response.data));
    } else {
      dispatch(getUserFailure(err.message));
    }
    throw err;
  }
};

export const logoutUser = () => async (dispatch) => {
  api.defaults.headers.common.Authorization = "";
  dispatch(setToken(""));
};

export const getClientRequest = (payload) => ({
  type: types.GET_CLIENT_REQUEST,
  payload,
});
export const getClientSuccess = (payload) => ({
  type: types.GET_CLIENT_SUCCESS,
  payload,
});
export const getClientFailure = (payload) => ({
  type: types.GET_CLIENT_FAILURE,
  payload,
});

export const getClient = (payload) => async (dispatch) => {
  dispatch(getClientRequest(payload));
  try {
    const response = await clientDetailGet();
    dispatch(getClientSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(getClientFailure(err.response.data));
    } else {
      dispatch(getClientFailure(err.message));
    }
  }
};
