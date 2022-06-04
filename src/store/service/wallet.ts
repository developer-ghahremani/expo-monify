import { WalletInterface } from "@src/models/wallet.model";
import service from "./";

const walletAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.mutation<WalletInterface[], void>({
      query: () => ({ method: "Get", url: "/wallet" }),
    }),
  }),
});

export const { useGetWalletsMutation } = walletAPI;
