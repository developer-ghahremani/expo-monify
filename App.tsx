import "@src/i18n";

import store, { persistor } from "@src/store";

import { LogBox } from "react-native";
import Monify from "./src/Monify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import { TailwindProvider } from "tailwind-rn";
import Toast from "react-native-toast-message";
import utilities from "./tailwind.json";

const App = (): JSX.Element => {
  LogBox.ignoreAllLogs();

  return (
    <TailwindProvider utilities={utilities}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Monify />
          <Toast position="top" />
        </PersistGate>
      </Provider>
    </TailwindProvider>
  );
};

export default App;
