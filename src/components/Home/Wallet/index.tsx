import { Container, INumberFormat, IText } from "@src/components/general";

import { NotificationIcon } from "@src/components/icons";
import React from "react";
import { useAppSelector } from "@src/store";
import { useTailwind } from "tailwind-rn/dist";

const Wallet = () => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const tailwind = useTailwind();
  return (
    <Container
      style={tailwind(
        "px-8 py-2 flex justify-between flex-row bg-white items-center"
      )}>
      <Container style={tailwind("flex flex-col items-start")}>
        <IText>{selectedWallet.name}</IText>
        <INumberFormat
          displayType="text"
          value={selectedWallet.amount}
          thousandSeparator
        />
      </Container>
      <Container>
        <NotificationIcon size={24} />
      </Container>
    </Container>
  );
};

export default Wallet;
