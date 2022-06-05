import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import constant from "@src/cosntant";
import store from "@src/store";

const api = axios.create({ baseURL: constant.baseUrl });

api.interceptors.request.use((cnf: AxiosRequestConfig) => {
  const headers: any = cnf.headers || {};
  const p: any = {};
  for (const key in cnf.data) {
    if (typeof cnf.data[key] === "string" && !cnf.data[key]) continue;
    p[key] = cnf.data[key];
  }

  // cnf.data = p;

  if (store.getState().user.token)
    headers.Authorization = store.getState().user.token;
  console.log(cnf, "CNF");

  return cnf;
});

api.interceptors.response.use(
  (res: AxiosResponse) => {
    // if (res.status === 201) showMessage("created", { type: "success" });
    return Promise.resolve(res);
  },
  (error: AxiosError) => {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      // if (typeof error.response.data.message === "string")
      //   showMessage(error.response.data.message, { type: "error" });
      /* ------------------------ ERROR ----------------------- */
      // if (Array.isArray(error.response.data.message))
      //   error.response.data.message.forEach((message: string) => {
      //     showMessage(message, { type: "error" });
      //   });
    }

    return Promise.reject(error);
  }
);

const axiosBaseQuery = (): BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
  },
  unknown,
  unknown
> => {
  return async ({ url, method, data, params }) => {
    try {
      const result = await api({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
          ...err,
        },
      };
    }
  };
};
export default axiosBaseQuery;
