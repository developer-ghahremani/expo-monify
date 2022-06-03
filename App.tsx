import "./src/i18n";

import { LogBox, StyleSheet, Text } from "react-native";
import { TailwindProvider, useTailwind } from "tailwind-rn";

import Monify from "./src/Monify";
import { Provider } from "react-redux";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import store from "@src/store";
import utilities from "./tailwind.json";

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <Monify />
      </TailwindProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
