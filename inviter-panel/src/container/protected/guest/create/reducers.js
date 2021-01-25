import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  data: {
    name: "",
    phone_no: "",
  },
};

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.SET_DATA_VALUE:
        // draft.data[payload.key] = payload.value;
        console.log("payload,type", payload, type);

        break;
    }
  });

export default reducer;
