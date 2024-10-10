import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootReducer from "./rootReducer"; // 루트 리듀서 가져오기
import { api } from "@/app/lib/redux/state/api";
import { persistConfig } from "@/app/lib/redux/persist-config";

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
