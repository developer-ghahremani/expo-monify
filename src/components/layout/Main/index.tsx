import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind("bg-gray-light")}>
      {props.children}
    </SafeAreaView>
  );
};

export default MainLayout;
