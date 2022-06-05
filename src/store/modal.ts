import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { WalletInterface } from "@src/models/wallet.model";

interface ModalInterface {
  wallet: {
    visible: boolean;
    selectedWallet: WalletInterface | void;
  };
}

const initialState: ModalInterface = {
  wallet: { visible: false, selectedWallet: {} },
};

const modal = createSlice({
  initialState,
  name: "modal",
  reducers: {
    toggleWalletModal: (state, action: PayloadAction<WalletInterface | {}>) => {
      return {
        wallet: {
          ...state.wallet,
          visible: !state.wallet.visible,
          selectedWallet: action.payload,
        },
      };
    },
  },
});

export default modal;
export const { toggleWalletModal } = modal.actions;
