import * as yup from "yup";

import {
  Container,
  IBottomSheetModal,
  IButton,
  IInput,
  IPicker,
  IText,
} from "@src/components/general";
import { useAppDispatch, useAppSelector } from "@src/store";

import { CloseIcon } from "@src/components/icons";
import { Formik } from "formik";
import React from "react";
import { showMessage } from "@src/utils/message";
import { toggleWalletModal } from "@src/store/modal";
import { useGetFinancialUnitQuery } from "@src/store/service/financialUnit";
import { useI18Next } from "@src/i18n";
import { usePostWalletMutation } from "@src/store/service/wallet";
import { useTailwind } from "tailwind-rn/dist";

const AddWallet = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const { data, isFetching } = useGetFinancialUnitQuery();
  const { wallet } = useAppSelector((s) => s.modal);
  const dispatch = useAppDispatch();
  const [postWallet, { isLoading }] = usePostWalletMutation();
  const validationSchema = yup.object({
    name: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.name") })),
    financialUnitId: yup
      .string()
      .required(
        t("messages.required", { fieldName: t("general.financialUnit") })
      ),
  });

  const handleFinish = async (params: {
    financialUnitId: string;
    name: string;
  }) => {
    try {
      await postWallet(params).unwrap();
      handleClose();
    } catch (error) {
      console.log(errror);
    }
  };

  const handleClose = () => {
    dispatch(toggleWalletModal());
  };

  return (
    <IBottomSheetModal onClose={handleClose} visible={wallet.visible}>
      <Container style={tailwind("flex flex-row items-center")}>
        <CloseIcon size={20} onPress={handleClose} />
        <IText style={tailwind("font-vazir-bold text-lg mx-4")}>
          {t("general.addWallet")}
        </IText>
      </Container>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ financialUnitId: "", name: "" }}
        onSubmit={handleFinish}>
        {({ errors, touched, handleChange, handleSubmit, values }) => (
          <Container>
            <IInput
              label={t("general.name")}
              style={tailwind("mt-4")}
              onChangeText={handleChange("name")}
              error={touched.name && errors.name}
            />
            {!isFetching && !!data && (
              <IPicker
                options={data.map((item) => ({
                  label: item.name,
                  value: item._id,
                }))}
                error={touched.financialUnitId && errors.financialUnitId}
                label={t("general.financialUnit")}
                style={tailwind("mt-2")}
                value={values.financialUnitId}
                onChange={handleChange("financialUnitId")}
              />
            )}
            <IButton onPress={handleSubmit} style={tailwind("mt-4 bg-primary")}>
              {t("general.submit")}
            </IButton>
            {isLoading && <IText>loading</IText>}
          </Container>
        )}
      </Formik>
    </IBottomSheetModal>
  );
};

export default AddWallet;
