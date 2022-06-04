import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserModel } from "./../models/user.model";

const initialState: UserModel = {};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      return action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user;
