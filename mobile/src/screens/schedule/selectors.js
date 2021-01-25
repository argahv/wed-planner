import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

export const reduxKey = "schedule";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);

export const selectDataS = createSelector([selectRoot], (state) =>
  state.data.map(({ event_title, time, title, description }, index) => {
    let newTitle = new Set(state.data[index]["event_title"]);
    return {
      event: [
        {
          title,
          time,
          description,
        },
      ],
    };
  })
);
