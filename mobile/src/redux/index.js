import { combineReducers } from "redux";
import global from "./global/reducer";
import rsvp from "./rsvp/reducer";
import schedule from "./schedule/reducer";
import foods from "./foods/reducer";
import quiz from "./quiz/reducer";
import createGuest from "./admin/guestCreateReducer";
import listGuest from "./admin/guestListReducer";
import addQuiz from "./admin/addQuizReducer";
import addSchedule from "./admin/addScheduleReducer";
import addFoods from "./admin/addFoodsReducer";

const rootReducer = combineReducers({
  global,
  rsvp,
  schedule,
  foods,
  quiz,
  createGuest,
  listGuest,
  addQuiz,
  addSchedule,
  addFoods,
});

export default rootReducer;
