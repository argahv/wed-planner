import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: [
    {
      title: "Not found",
      description: "Not found",
      food_preference: "",
      food_type: "",
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_FOODS_REQUEST:
        draft.loading = true;
        break;
      case types.GET_FOODS_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case types.GET_FOODS_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
