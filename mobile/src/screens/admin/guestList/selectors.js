import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

export const reduxKey = "admin_guest_list";

export const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);

export const selectGuestList = createSelector(
  [selectData],
  (state) => state.user
);
