import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: [
    {
      time: "",
      title: "",
      description: "",
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_SCHEDULE_REQUEST:
        draft.loading = true;
        break;
      case types.GET_SCHEDULE_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case types.GET_SCHEDULE_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
