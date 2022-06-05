import { WalletInterface } from "@src/models/wallet.model";
import service from "./";

const walletAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.mutation<WalletInterface[], void>({
      query: () => ({ method: "Get", url: "/wallet" }),
    }),
    getWalletList: builder.query<WalletInterface[], void>({
      query: () => ({ method: "Get", url: "/wallet" }),
      providesTags: ["wallet"],
    }),
    postWallet: builder.mutation<
      WalletInterface,
      { name: string; financialUnitId: string }
    >({
      query: (data) => ({ method: "Post", url: "/wallet", data }),
      invalidatesTags: ["wallet"],
    }),
  }),
});

export const {
  useGetWalletsMutation,
  useGetWalletListQuery,
  usePostWalletMutation,
} = walletAPI;
