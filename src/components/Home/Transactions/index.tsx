import {
  Container,
  INumberFormat,
  IText,
  ITouchable,
} from "@src/components/general";
import React, { useState } from "react";

import { Text } from "react-native";
import { TimePeriod } from "@src/cosntant";
import moment from "moment";
import { prepareCopy } from "immer/dist/internal";
import { useAppSelector } from "@src/store";
import { useGetTransactionsQuery } from "@src/store/service/transaction";
import { useI18Next } from "@src/i18n";
import { useTailwind } from "tailwind-rn/dist";

const options: { title: string; fromDate: string }[] = [
  {
    title: TimePeriod.today,
    fromDate: moment().hour(0).minute(0).toISOString(),
  },
  {
    title: TimePeriod["7days"],
    fromDate: moment().add(-7, "day").toISOString(),
  },
  {
    title: TimePeriod["30days"],
    fromDate: moment().add(-30, "day").toISOString(),
  },
];

const Transactions = () => {
  const tailwind = useTailwind();
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const { t } = useI18Next();
  const [fromDate, setFromDate] = useState<string>(TimePeriod.today);

  const { data, isFetching } = useGetTransactionsQuery(
    {
      walletId: selectedWallet._id || "",
      fromDate: options.find((i) => i.title === fromDate)?.fromDate,
    },
    { skip: !selectedWallet._id }
  );

  const handleChangeFromDate = (params: string) => {
    setFromDate(params);
  };

  return (
    <Container style={tailwind("bg-white p-4 rounded-xl")}>
      <Container style={tailwind("flex flex-row gap-4")}>
        {options.map((item, index) => (
          <ITouchable
            onPress={() => handleChangeFromDate(item.title)}
            style={tailwind(
              `flex-1 border-2 flex justify-center items-center border-gray-light py-1 rounded ${
                index === 1 ? "mx-4" : "mx-0"
              } ${item.title === fromDate ? "bg-primary" : "bg-white"}`
            )}>
            <IText
              style={tailwind(
                `font-vazir-bold ${
                  item.title !== fromDate ? "text-primary" : "text-white"
                }`
              )}>
              {t(`general.${item.title}`)}
            </IText>
          </ITouchable>
        ))}
      </Container>

      <Container style={tailwind("flex justify-between mt-4 flex-row")}>
        <IText>{t("general.total")}</IText>
        <INumberFormat
          thousandSeparator
          displayType="text"
          value={data?.reduce(
            (pre, current) => current.amount * current.type + pre,
            0
          )}
        />
      </Container>
      <Container style={tailwind("flex justify-between mt-2 flex-row")}>
        <IText>{t("general.income")}</IText>
        <INumberFormat
          thousandSeparator
          displayType="text"
          value={data
            ?.filter((item) => item.type > 0)
            .reduce((pre, current) => current.amount + pre, 0)}
        />
      </Container>
      <Container style={tailwind("flex justify-between mt-2 flex-row")}>
        <IText>{t("general.cost")}</IText>
        <INumberFormat
          thousandSeparator
          displayType="text"
          value={data
            ?.filter((item) => item.type < 0)
            .reduce((pre, current) => current.amount + pre, 0)}
        />
      </Container>
    </Container>
  );
};

export default Transactions;
