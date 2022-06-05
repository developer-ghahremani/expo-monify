import { Container, INumberFormat, IText } from "@src/components/general";
import { Text, View } from "react-native";

import React from "react";
import { WalletInterface } from "@src/models/wallet.model";
import { useTailwind } from "tailwind-rn/dist";

type Props = { wallet: WalletInterface };

const WalletItem = (props: Props) => {
  const tailwind = useTailwind();

  return (
    <Container>
      <Container style={tailwind("flex flex-col items-start")}>
        <IText style={tailwind("text-base")}>{props.wallet.name}</IText>
        <INumberFormat
          value={props.wallet.amount}
          displayType="text"
          thousandSeparator
          style={tailwind("text-lg")}
          prefix={props.wallet.financialUnitId?.symbol}
        />
      </Container>
      <Container style={tailwind("h-[1px] bg-primary")}></Container>
    </Container>
  );
};

export default WalletItem;
