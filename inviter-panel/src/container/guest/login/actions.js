import * as types from "./types";
import { loginPost } from "../../../api";
import { setToken } from "../../actions";

export const loginRequest = (payload) => ({
  type: types.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const login = (data) => async (dispatch) => {
  dispatch(loginRequest(data));
  try {
    const response = await loginPost(data);
    dispatch(loginSuccess(response.data));
    const accessToken = `Bearer ${response.data.token}`;
    dispatch(setToken(accessToken));
    localStorage.setItem("token", accessToken);
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(
        loginFailure({ ...err.response.data, message: err.response.data.error })
      );
    } else {
      dispatch(loginFailure({ message: err.message }));
    }
    throw err;
  }
};
