import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    time: Date.now(),
    title: "",
    description: "",
  },
};

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.SET_DATA_VALUE:
        // draft.data[payload.key] = payload.value;
        console.log("payload,type", payload, type);

        break;
      case types.CREATE_FOODS_REQUEST:
        draft.loading = true;
        break;
      case types.CREATE_FOODS_SUCCESS:
        draft.loading = false;
        break;
      case types.CREATE_FOODS_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
