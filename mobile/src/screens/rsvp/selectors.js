import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

export const reduxKey = "rsvp";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);
