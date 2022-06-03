import { createSlice } from "@reduxjs/toolkit";
interface UserIniterface {
  token?: string;
}
const initialState: UserIniterface = {};
const user = createSlice({ name: "user", initialState, reducers: {} });
export default user;
