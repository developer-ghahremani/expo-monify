import { Container, IButton, IInput, IText } from "@src/components/general";

import { MainLayout } from "@src/components/layout";
import React from "react";
import { pageNames } from "@src/cosntant";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate(pageNames.auth.sendSMS);
    }, 2000);
  }, []);

  return (
    <MainLayout>
      <IText>salam</IText>
    </MainLayout>
  );
};

export default SplashScreen;
