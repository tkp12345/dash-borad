import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppStore, makeStore } from "./store";
import { persistStore } from "redux-persist";
import { useRef } from "react";
import { setupListeners } from "@reduxjs/toolkit/query";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    setupListeners(storeRef.current.dispatch);
  }
  const persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<div>...loading</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
