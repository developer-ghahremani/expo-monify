import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { pageNames } from "./cosntant";
import routes from "./routes";

const Monify = (): JSX.Element => {
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
