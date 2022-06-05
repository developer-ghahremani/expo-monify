import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SourceInterface } from "@src/models/source.model";
import { WalletInterface } from "@src/models/wallet.model";

interface ModalInterface {
  wallet: {
    visible: boolean;
    selectedWallet?: WalletInterface;
  };
  source: {
    visible: boolean;
    selectedSource?: SourceInterface;
  };
}

const initialState: ModalInterface = {
  wallet: { visible: false },
  source: { visible: false },
};

const modal = createSlice({
  initialState,
  name: "modal",
  reducers: {
    toggleWalletModal: (
      state,
      action: PayloadAction<WalletInterface | undefined>
    ) => {
      return {
        ...state,
        wallet: {
          ...state.wallet,
          visible: !state.wallet.visible,
          selectedWallet: action.payload,
        },
      };
    },

    toggleSourceModal: (
      state,
      action: PayloadAction<SourceInterface | undefined>
    ) => {
      return {
        ...state,
        source: {
          ...state.source,
          visible: !state.source.visible,
          selectedSource: action.payload,
        },
      };
    },
  },
});

export default modal;
export const { toggleWalletModal, toggleSourceModal } = modal.actions;
