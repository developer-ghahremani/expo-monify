import "@src/i18n";

import { I18nManager, LogBox } from "react-native";
import store, { persistor } from "@src/store";

import { AddWallet } from "@src/components/modals";
import Monify from "./src/Monify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import { TailwindProvider } from "tailwind-rn";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import utilities from "./tailwind.json";

const App = () => {
  LogBox.ignoreAllLogs();

  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);

  const [loaded] = useFonts({
    vazir: require("@assets/fonts/vazir/Vazir-FD.ttf"),
    "vazir-bold": require("@assets/fonts/vazir/Vazir-Bold-FD.ttf"),
    "vazir-black": require("@assets/fonts/vazir/Vazir-Black-FD.ttf"),
    "vazir-medium": require("@assets/fonts/vazir/Vazir-Medium-FD.ttf"),
  });

  if (!loaded) return null;

  return (
    <TailwindProvider utilities={utilities}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Monify />
          <AddWallet />
          <Toast position="top" />
        </PersistGate>
      </Provider>
    </TailwindProvider>
  );
};

export default App;
