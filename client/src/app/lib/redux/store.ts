import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";
import { api } from "@/app/lib/redux/state/api";
import { persistConfig } from "@/app/lib/redux/persist-config";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck:
          process.env.NODE_ENV !== "production"
            ? {
                ignoredActions: [
                  FLUSH,
                  REHYDRATE,
                  PAUSE,
                  PERSIST,
                  PURGE,
                  REGISTER,
                ],
              }
            : false,
      }).concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
