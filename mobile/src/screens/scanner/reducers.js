import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA_VALUE:
        draft.data[action.payload.key] = action.payload.value;
        break;
      case types.ATTEND_UPDATE__REQUEST:
        draft.loading = true;
        break;
      case types.ATTEND_UPDATE__SUCCESS:
        draft.loading = false;
        break;
      case types.ATTEND_UPDATE__FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
