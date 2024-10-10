import { combineReducers } from "@reduxjs/toolkit";
import { api } from "@/app/lib/redux/state/api";
import globalReducer from "@/app/lib/redux/state";

const rootReducer = combineReducers({
  global: globalReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
