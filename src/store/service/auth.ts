import { UserModel } from "@src/models/user.model";
import service from ".";

const auth = service.injectEndpoints({
  endpoints: (builder) => ({
    sendAuthSMS: builder.mutation<any, { mobile: string }>({
      query: (data) => ({ url: "/auth/send-sms", method: "Post", data }),
    }),
    login: builder.mutation<UserModel, { mobile: string; password: string }>({
      query: (data) => ({ url: "/auth/login", method: "Post", data }),
    }),
    whoAmI: builder.mutation<UserModel, void>({
      query: () => ({ url: "/auth/who-am-i", method: "Get" }),
    }),
  }),
});

export const { useSendAuthSMSMutation, useLoginMutation, useWhoAmIMutation } =
  auth;
