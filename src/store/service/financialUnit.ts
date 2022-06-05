import { FinancialUnit } from "@src/models/financialUnit.model";
import service from "./";

const financialUnitAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialUnit: builder.query<FinancialUnit[], void>({
      query: () => ({ url: "/financial-unit", method: "Get" }),
    }),
  }),
});

export const { useGetFinancialUnitQuery } = financialUnitAPI;
