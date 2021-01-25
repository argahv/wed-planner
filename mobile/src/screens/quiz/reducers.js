import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {},
  quizQuestions: [],
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA_VALUE:
        draft.data[action.payload.index] = action.payload.value;
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
      case types.GET_QUIZ_REQUEST:
        draft.loading = true;
        break;
      case types.GET_QUIZ_SUCCESS:
        draft.loading = false;
        // draft.data = action.payload;
        draft.quizQuestions = action.payload;
        break;
      case types.GET_QUIZ_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
