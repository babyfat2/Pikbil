import { combineReducers, configureStore, } from "@reduxjs/toolkit";
  import {
    REHYDRATE,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
  } from "redux-persist";
import { reduxStorage } from "./storage";
import routeApp from "./slice/routeApp";
import darkMode from "./slice/darkMode";


const persistConfig = {
  key: "root",
  storage: reduxStorage,
  whitelist: ["routes", "prefs", "user"],
};
  const reducer = combineReducers({
    routeApp,
    darkMode,
  });
  const persistedReducer = persistReducer(persistConfig, reducer);
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          immutableCheck: false,
          serializableCheck: false,
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  