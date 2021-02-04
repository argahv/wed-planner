import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import rootReducer from "./";
import { api } from "../api";

const SetTransform = createTransform(
  undefined,
  // transform state being rehydrated
  (outboundState, key) => {
    // app initial api setup on awake/restore of store
    if (outboundState && outboundState.baseUrl) {
      api.defaults.baseURL = `${
        process.env.NODE_ENV === "production" ? "https" : "http"
      }://${outboundState.baseUrl}`;
      if (outboundState.token) {
        api.defaults.headers.common.Authorization = outboundState.token;
      }
    }
    return { ...outboundState };
  },
  // define which reducers this transform gets called for.
  { whitelist: ["global"] }
);

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  transforms: [SetTransform],
  blacklist: [
    "rsvp",
    "schedule",
    "foods",
    "quiz",
    "admin_guest_create",
    "admin_guest_list",
    "admin_quiz_create",
    "admin_schedule_create",
    "admin_foods_create",
    "attend_scanner",
  ],
};

const configureStore = () => {
  const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const middlewares = [ReduxThunk];
  // if (__DEV__) {
  //   const createDebugger = require("redux-flipper").default;
  //   middlewares.push(createDebugger());
  // }
  const enhancers = [applyMiddleware(...middlewares)];
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, composeEnhancers(...enhancers));

  const persistor = persistStore(store);
  // persistor.purge();

  return { store, persistor };
};

export default configureStore;
