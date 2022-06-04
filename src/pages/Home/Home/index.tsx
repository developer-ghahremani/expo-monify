import { Sources, Transactions, Wallet } from "@src/components/Home";

import { Container } from "@src/components/general";
import { MainLayout } from "@src/components/layout";
import React from "react";
import { ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

const HomeScreen = () => {
  const tailwind = useTailwind();
  return (
    <MainLayout>
      <ScrollView>
        <Wallet />
        <Container style={tailwind("px-4 mt-4")}>
          <Transactions />
          <Sources />
        </Container>
      </ScrollView>
    </MainLayout>
  );
};

export default HomeScreen;
