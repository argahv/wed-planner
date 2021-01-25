import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    question: "",
    answer: "",
    options: "",
  },
};

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.SET_DATA_VALUE:
        // draft.data[payload.key] = payload.value;
        console.log("payload,type", payload, type);

        break;
      case types.POST_QUIZ_REQUEST:
        draft.loading = true;
        break;
      case types.POST_QUIZ_SUCCESS:
        draft.loading = false;
        break;
      case types.POST_QUIZ_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
