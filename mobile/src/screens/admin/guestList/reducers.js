import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {},
};

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.LIST_GUEST_REQUEST:
        draft.loading = true;
        break;
      case types.LIST_GUEST_SUCCESS:
        draft.loading = false;
        draft.data = payload;
        break;
      case types.LIST_GUEST_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
