import {
  Container,
  INumberFormat,
  IText,
  ITouchable,
} from "@src/components/general";

import React from "react";
import { WalletInterface } from "@src/models/wallet.model";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  wallet: WalletInterface;
  onPress?: (wallet: WalletInterface) => void;
};

const WalletItem = (props: Props) => {
  const tailwind = useTailwind();

  const handleClickWallet = () => {
    props.onPress && props.onPress(props.wallet);
  };

  return (
    <ITouchable onPress={handleClickWallet}>
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
    </ITouchable>
  );
};

export default WalletItem;
