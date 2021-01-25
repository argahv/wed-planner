import { selectData } from "./selectors";
import * as types from "./types";
import { updateRSVP, rsvpGet } from "../../api";
import Toast from "react-native-tiny-toast";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const rsvpUpdateRequest = (payload) => ({
  type: types.POST_RSVP_REQUEST,
  payload,
});
export const rsvpUpdateSuccess = (payload) => ({
  type: types.POST_RSVP_SUCCESS,
  payload,
});

export const rsvpUpdateFailure = (payload) => ({
  type: types.POST_RSVP_FAILURE,
  payload,
});

export const rsvpUpdate = () => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(rsvpUpdateRequest(data));
  try {
    const response = await updateRSVP(data);
    dispatch(rsvpUpdateSuccess(response.data));
    const toast = Toast.showSuccess("RSVP updated");
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
      dispatch(rsvpUpdateFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(rsvpUpdateFailure(error.message));
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

export const getRSVPRequest = (payload) => ({
  type: types.GET_RSVP_REQUEST,
  payload,
});
export const getRSVPSuccess = (payload) => ({
  type: types.GET_RSVP_SUCCESS,
  payload,
});

export const getRSVPFailure = (payload) => ({
  type: types.GET_RSVP_FAILURE,
  payload,
});

export const getRSVP = () => async (dispatch) => {
  dispatch(getRSVPRequest());
  try {
    const response = await rsvpGet();
    dispatch(getRSVPSuccess(response.data.data));

    return response.data;
  } catch (error) {
    let errorMessage = "";
    if (error.response) {
      errorMessage = error.response.data.message;
      dispatch(getRSVPFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(getRSVPFailure(error.message));
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
