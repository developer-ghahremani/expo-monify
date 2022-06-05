import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "./auth";
import modal from "./modal";
import { selectedWallet } from "./selectedWallet";
import service from "./service";
import user from "./user";
import { walletMiddleware } from "./service/wallet";

const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [service.reducerPath]: service.reducer,
  [auth.name]: auth.reducer,
  [selectedWallet.name]: selectedWallet.reducer,
  [modal.name]: modal.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    blacklist: [service.reducerPath, modal.name],
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(service.middleware, walletMiddleware),
});

export let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
