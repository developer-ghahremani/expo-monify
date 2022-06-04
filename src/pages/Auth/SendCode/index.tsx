import * as yup from "yup";

import { Container, IButton, IInput, IText } from "@src/components/general";
import { useAppDispatch, useAppSelector } from "@src/store";

import { BackIcon } from "@src/components/icons";
import { Formik } from "formik";
import { MainLayout } from "@src/components/layout";
import React from "react";
import { changeAuthStep } from "@src/store/auth";
import { pageNames } from "@src/cosntant";
import { setUser } from "@src/store/user";
import { useI18Next } from "@src/i18n";
import { useLoginMutation } from "@src/store/service/auth";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

const SendCode = () => {
  const tailwind = useTailwind();
  const { reset } = useNavigation();
  const auth = useAppSelector((s) => s.auth);
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const validationSchema = yup.object({
    code: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.code") }))
      .length(
        6,
        t("messages.length", { fieldName: t("general.code"), length: 6 })
      ),
  });

  const handleFinish = async (params: { code: string }) => {
    try {
      const data = await login({
        mobile: auth.mobile,
        password: params.code,
      }).unwrap();
      dispatch(setUser(data));
      reset({ index: 0, routes: [{ name: pageNames.home.index }] });
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    dispatch(changeAuthStep({ step: 1, mobile: "" }));
    reset({ index: 0, routes: [{ name: pageNames.auth.sendSMS }] });
  };

  return (
    <MainLayout>
      <Container style={tailwind("flex justify-between h-full")}>
        <Container
          style={tailwind("p-4 flex flex-row justify-between items-center")}>
          <BackIcon onPress={handleBack} size={22} />
          <IText style={tailwind("text-xl")}>{t("general.sendCode")}</IText>
          <Container style={{ width: 22 }} />
        </Container>
        <Formik
          initialValues={{ code: "" }}
          onSubmit={handleFinish}
          validationSchema={validationSchema}>
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Container style={tailwind("mx-auto mx-8 p-2")}>
              <IText style={tailwind("text-xl text-center")}>
                {auth.mobile}
              </IText>
              <IInput
                label={t("general.code")}
                onChangeText={handleChange("code")}
                value={values.code}
                error={touched.code && errors.code}
                maxLength={6}
              />
              <IButton onPress={handleSubmit} style={tailwind("mt-4")}>
                {t("general.submit")}
              </IButton>
            </Container>
          )}
        </Formik>
        <Container />
      </Container>
    </MainLayout>
  );
};

export default SendCode;
