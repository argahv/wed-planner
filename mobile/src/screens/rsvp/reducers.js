import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    attending: false,
    side: "",
    guest_no: 0,
    children_no: 0,
    drink_choice: "",
    food_preference: "",
    accommodation: "",
    travel: "",
  },
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA_VALUE:
        draft.data[action.payload.key] = action.payload.value;
        break;
      case types.POST_RSVP_REQUEST:
        draft.loading = true;
        break;
      case types.POST_RSVP_SUCCESS:
        draft.loading = false;
        break;
      case types.POST_RSVP_FAILURE:
        draft.loading = false;
        break;
      case types.GET_RSVP_REQUEST:
        draft.loading = true;
        break;
      case types.GET_RSVP_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case types.GET_RSVP_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
