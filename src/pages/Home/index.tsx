import { HomeIcon } from "@src/components/icons";
import { IText } from "@src/components/general";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { pageNames } from "@src/cosntant";
import routes from "./routes";
import { useTailwind } from "tailwind-rn/dist";

const HomeScreen = () => {
  const Stack = createBottomTabNavigator();
  const tailwind = useTailwind();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={pageNames.home.home}>
      {routes.map((route) => (
        <Stack.Screen
          {...route}
          options={{
            tabBarLabel: ({ focused }) => (
              <IText
                style={tailwind(
                  `${focused ? "text-primary" : "text-gray-500"}`
                )}>
                {route.label}
              </IText>
            ),
            tabBarIcon: ({ focused }) => (
              <HomeIcon
                style={tailwind(
                  `${focused ? "text-primary" : "text-gray-500"}`
                )}
                size={20}
              />
            ),
          }}
          key={route.name}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeScreen;
