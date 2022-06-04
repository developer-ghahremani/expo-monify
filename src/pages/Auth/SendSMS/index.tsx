import * as yup from "yup";

import { Container, IButton, IInput, IText } from "@src/components/general";

import { Formik } from "formik";
import { MainLayout } from "@src/components/layout";
import React from "react";
import { changeAuthStep } from "@src/store/auth";
import { pageNames } from "@src/cosntant";
import { useAppDispatch } from "@src/store";
import { useI18Next } from "@src/i18n";
import { useNavigation } from "@react-navigation/native";
import { useSendAuthSMSMutation } from "@src/store/service/auth";
import { useTailwind } from "tailwind-rn/dist";

const AuthSendSMS = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const [sendSMS] = useSendAuthSMSMutation();
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();

  const validationSchema = yup.object({
    mobile: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.mobile") }))
      .length(
        11,
        t("messages.length", { fieldName: t("general.mobile"), length: 11 })
      ),
  });

  const handleFinish = async (params: { mobile: string }) => {
    try {
      await sendSMS(params).unwrap();
      dispatch(changeAuthStep({ step: 2, mobile: params.mobile }));
      navigate(pageNames.auth.sendCode);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <Container style={tailwind("h-full justify-between")}>
        <Container />
        <Container>
          <IText
            style={tailwind("text-center text-3xl text-primary font-bold")}>
            {t("general.monify")}
          </IText>
          <Formik
            initialValues={{ mobile: "" }}
            onSubmit={handleFinish}
            validationSchema={validationSchema}>
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <Container style={tailwind("mx-auto mx-8 p-2")}>
                <IInput
                  maxLength={11}
                  value={values.mobile}
                  label={t("general.mobile")}
                  keyboardType="number-pad"
                  onChangeText={handleChange("mobile")}
                  error={touched.mobile && errors.mobile}
                />
                <IButton onPress={handleSubmit} style={tailwind("mt-4")}>
                  {t("general.submit")}
                </IButton>
              </Container>
            )}
          </Formik>
        </Container>
        <Container />
      </Container>
    </MainLayout>
  );
};

export default AuthSendSMS;
