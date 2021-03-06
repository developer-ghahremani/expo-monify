import { Container, IText } from "@src/components/general";
import { useAppDispatch, useAppSelector } from "@src/store";

import { MainLayout } from "@src/components/layout";
import React from "react";
import { pageNames } from "@src/cosntant";
import { setSelectedWallet } from "@src/store/selectedWallet";
import { setUser } from "@src/store/user";
import { showMessage } from "@src/utils/message";
import { useEffect } from "react";
import { useI18Next } from "@src/i18n";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";
import { useWhoAmIMutation } from "@src/store/service/auth";

const SplashScreen = () => {
  const { navigate, reset } = useNavigation();
  const tailwind = useTailwind();
  const auth = useAppSelector((s) => s.auth);
  const user = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();
  const [whoAmI] = useWhoAmIMutation();
  const { t } = useI18Next();

  useEffect(() => {
    if (user.token) return handleGetUser();
    setTimeout(() => {
      navigate(
        auth.step === 1 ? pageNames.auth.sendSMS : pageNames.auth.sendCode
      );
    }, 2000);
  }, []);

  const handleGetUser = async () => {
    try {
      const data = await whoAmI().unwrap();
      dispatch(setUser({ ...user, ...data }));
      showMessage({
        text1: t("messages.welcome", {
          name: data.firstName ? data.firstName : data.mobile,
        }),
      });
      if (data.wallets && data.wallets[0])
        dispatch(setSelectedWallet(data.wallets[0]));
      reset({ index: 0, routes: [{ name: pageNames.home.index }] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <Container style={tailwind("h-full flex justify-center items-center")}>
        <IText style={tailwind("text-xl")}>Splash</IText>
      </Container>
    </MainLayout>
  );
};

export default SplashScreen;
