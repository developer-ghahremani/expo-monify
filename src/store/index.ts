import { configureStore } from "@reduxjs/toolkit";
import service from "./service";
import { useDispatch } from "react-redux";
import user from "./user";
const store = configureStore({
  reducer: {
    [user.name]: user.reducer,
    [service.reducerPath]: service.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
