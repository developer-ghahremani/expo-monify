import service from ".";

const auth = service.injectEndpoints({
  endpoints: (builder) => ({
    sendAuth: builder.mutation<any, { mobile: string }>({
      query: (data) => ({ url: "/auth/send-sms", method: "Post", data }),
    }),
  }),
});

export const { useSendAuthMutation } = auth;
