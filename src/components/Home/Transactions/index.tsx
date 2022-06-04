import { Container } from "@src/components/general";
import React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

const Transactions = () => {
  const tailwind = useTailwind();
  return (
    <Container style={tailwind("bg-white p-4 rounded-xl")}>
      <Text>Transactions</Text>
    </Container>
  );
};

export default Transactions;
