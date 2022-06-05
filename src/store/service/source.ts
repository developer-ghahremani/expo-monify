import { SourceInterface } from "@src/models/source.model";
import service from "./";

const sourceAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getSources: builder.query<SourceInterface[], { waletId: string }>({
      query: ({ waletId }) => ({ url: `/source/${waletId}`, method: "Get" }),
      providesTags: ["source"],
    }),
    postSource: builder.mutation<
      SourceInterface,
      {
        walletId: string;
        name: string;
        type: string;
        initialAmount: number;
        bankCartNumber?: string;
        bankAccountNumber?: string;
        expiredDate?: string;
        code?: string;
        icon?: string;
        note?: string;
      }
    >({
      query: (data) => ({
        url: `/source`,
        method: "Post",
        data,
      }),
      invalidatesTags: ["source", "wallet"],
    }),
  }),
});

export const { useGetSourcesQuery, usePostSourceMutation } = sourceAPI;
