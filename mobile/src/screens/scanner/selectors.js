import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

export const reduxKey = "attend_scanner";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);
