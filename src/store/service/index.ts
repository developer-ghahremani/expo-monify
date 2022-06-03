import axiosBaseQuery from "./AxiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: "service",
  tagTypes: ["wallet", "source", "transaction"],
});

export default service;
