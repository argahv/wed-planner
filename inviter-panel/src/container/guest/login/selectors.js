import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "login";

const selectRoot = state => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  state => state.loading
);

export const selectHasError = createSelector(
  [selectRoot],
  state => state.hasError
);

export const selectMessage = createSelector(
  [selectRoot],
  state => state.message
);
