import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

const selectGlobal = (state) => state.global || INITIAL_STATE;

export const selectToken = createSelector(
  [selectGlobal],
  (state) => state.token
);

export const selectIsLoggedIn = createSelector(
  [selectToken],
  (token) => !!token
);

export const selectUsers = createSelector(
  [selectGlobal],
  (state) => state.user
);

export const selectUser = createSelector([selectGlobal], (state) => state.user);
