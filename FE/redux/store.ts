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
import { authApi } from "./api/auth";
import user from "./slice/user";
import { serviceApi } from "./api/service";
import { actionApi } from "./api/action";


const persistConfig = {
  key: "root",
  storage: reduxStorage,
  whitelist: ["routeApp", "darkMode", "user"],
};
  const reducer = combineReducers({
    routeApp,
    darkMode,
    user,
    [authApi.reducerPath]: authApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [actionApi.reducerPath]: actionApi.reducer,
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
      .concat(authApi.middleware)
      .concat(serviceApi.middleware)
      .concat(actionApi.middleware)
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  