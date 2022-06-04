import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { pageNames } from "@src/cosntant";
import routes from "./routes";

const HomeScreen = () => {
  const Stack = createBottomTabNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={pageNames.home.home}>
      {routes.map((route) => (
        <Stack.Screen {...route} key={route.name} />
      ))}
    </Stack.Navigator>
  );
};

export default HomeScreen;
