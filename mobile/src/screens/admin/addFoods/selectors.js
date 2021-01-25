import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

export const reduxKey = "admin_foods_create";

export const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);
