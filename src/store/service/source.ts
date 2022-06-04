import { SourceInterface } from "@src/models/source.model";
import service from "./";

const sourceAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getSources: builder.query<SourceInterface[], { waletId: string }>({
      query: ({ waletId }) => ({ url: `/source/${waletId}`, method: "Get" }),
    }),
  }),
});

export const { useGetSourcesQuery } = sourceAPI;
