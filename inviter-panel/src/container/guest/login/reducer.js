import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  message: "",
  hasError: false
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGIN_REQUEST:
        draft.loading = true;
        break;
      case types.LOGIN_SUCCESS:
        draft.loading = false;
        draft.hasError = false;
        draft.message = INITIAL_STATE.message;
        break;
      case types.LOGIN_FAILURE:
        draft.loading = false;
        draft.hasError = true;
        draft.message = action.payload.message;
        break;
    }
  });

export default reducer;
