import { registerGuest } from "../../../../api";
import * as types from "./types";
import { selectData } from "./selectors";

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

export const createGuest = () => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(createGuestRequest(data));
  try {
    const response = await registerGuest(data);
    dispatch(createGuestSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(createGuestFailure(err.response.data));
    } else {
      dispatch(createGuestFailure(err.message));
    }
    throw err;
  }
};
