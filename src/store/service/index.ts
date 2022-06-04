import axiosBaseQuery from "./AxiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "service",
  tagTypes: ["wallet", "source", "transaction"],
  endpoints: () => ({}),
});

export default service;
