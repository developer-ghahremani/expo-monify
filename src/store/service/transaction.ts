import { TransactionInterface } from "@src/models/transaction.model";
import service from "./";

const transactionAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<
      TransactionInterface[],
      { walletId: string; fromDate?: string }
    >({
      query: ({ walletId, ...params }) => ({
        url: `/transaction/${walletId}`,
        method: "Get",
        params,
      }),
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionAPI;
