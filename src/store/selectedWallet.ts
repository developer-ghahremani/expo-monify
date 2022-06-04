import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { WalletInterface } from "@src/models/wallet.model";

const initialState: WalletInterface = {};

export const selectedWallet = createSlice({
  initialState,
  name: "selectedWallet",
  reducers: {
    setSelectedWallet: (state, action: PayloadAction<WalletInterface>) => {
      return action.payload;
    },
  },
});

export const { setSelectedWallet } = selectedWallet.actions;
