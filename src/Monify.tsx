import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import Pages from "./pages";
import React from "react";
import SplashScreen from "./pages/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { pageNames } from "./cosntant";
import routes from "./routes";

const Monify = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={pageNames.splash}
        screenOptions={{ headerShown: false }}>
        {routes.map((route) => (
          <Stack.Screen {...route} key={route.name} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Monify;
