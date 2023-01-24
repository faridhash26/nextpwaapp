import { configureStore, combineReducers } from "@reduxjs/toolkit";

import useSettingsRducer from "../reducers/userSettings/userSettings";

const reducers = combineReducers({
  userSettings: useSettingsRducer,
});
export const store = configureStore({
  reducer: reducers,
});
