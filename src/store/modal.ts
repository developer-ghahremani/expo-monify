import { WalletInterface } from "@src/models/wallet.model";
import { createSlice } from "@reduxjs/toolkit";
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
    toggleWalletModal: (state) => {
      return { wallet: { ...state.wallet, visible: !state.wallet.visible } };
    },
  },
});

export default modal;
export const { toggleWalletModal } = modal.actions;
