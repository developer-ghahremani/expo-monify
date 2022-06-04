import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthInterface {
  mobile: string;
  step: 1 | 2;
}

const initialState: AuthInterface = {
  step: 1,
  mobile: "",
};

const auth = createSlice({
  initialState,
  name: "auth",
  reducers: {
    changeAuthStep: (state, action: PayloadAction<AuthInterface>) => {
      return action.payload;
    },
  },
});

export default auth;
export const { changeAuthStep } = auth.actions;
