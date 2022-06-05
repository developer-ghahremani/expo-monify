import { Middleware } from "@reduxjs/toolkit";
import { WalletInterface } from "@src/models/wallet.model";
import service from "./";
import { setSelectedWallet } from "../selectedWallet";

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
    patchWallet: builder.mutation<
      any,
      { name: string; financialUnitId: string; walletId: string }
    >({
      query: ({ walletId, ...data }) => ({
        method: "Patch",
        url: `/wallet/${walletId}`,
        data,
      }),
      invalidatesTags: ["wallet"],
    }),
  }),
});

export const {
  useGetWalletsMutation,
  useGetWalletListQuery,
  usePostWalletMutation,
  usePatchWalletMutation,
} = walletAPI;

export const walletMiddleware: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (
      action.type === "service/executeQuery/fulfilled" &&
      (action.meta.arg.endpointName === "getWalletList" ||
        action.meta.arg.endpointName === "patchWallet")
    )
      dispatch(
        setSelectedWallet({
          ...getState().selectedWallet,
          ...action.payload.find(
            (item: WalletInterface) =>
              item._id === getState().selectedWallet._id
          ),
        })
      );

    return next(action);
  };
