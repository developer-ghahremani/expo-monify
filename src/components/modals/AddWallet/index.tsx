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
import {
  usePatchWalletMutation,
  usePostWalletMutation,
} from "@src/store/service/wallet";

import { CloseIcon } from "@src/components/icons";
import { Formik } from "formik";
import { Header2 } from "@src/components/layout";
import React from "react";
import { toggleWalletModal } from "@src/store/modal";
import { useGetFinancialUnitQuery } from "@src/store/service/financialUnit";
import { useI18Next } from "@src/i18n";
import { useTailwind } from "tailwind-rn/dist";

const AddWallet = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const { data, isFetching } = useGetFinancialUnitQuery();
  const { wallet } = useAppSelector((s) => s.modal);
  const dispatch = useAppDispatch();
  const [postWallet, { isLoading }] = usePostWalletMutation();
  const [patchWallet, { isLoading: isEditLoading }] = usePatchWalletMutation();
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
    const handleAdd = async () => {
      try {
        await postWallet(params).unwrap();
        handleClose();
      } catch (error) {
        console.log(error);
      }
    };

    const handlEdit = async () => {
      try {
        await patchWallet({
          ...params,
          walletId: wallet.selectedWallet?._id || "",
        }).unwrap();
        handleClose();
      } catch (error) {
        console.log(error);
      }
    };

    if (!wallet.selectedWallet?._id) return handleAdd();
    handlEdit();
  };

  const handleClose = () => {
    dispatch(toggleWalletModal());
  };

  return (
    <IBottomSheetModal onClose={handleClose} visible={wallet.visible}>
      <Header2 title={t("general.addWallet")} onPressClose={handleClose} />
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={{
          financialUnitId: wallet.selectedWallet?.financialUnitId?._id || "",
          name: wallet.selectedWallet?.name || "",
        }}
        onSubmit={handleFinish}>
        {({ errors, touched, handleChange, handleSubmit, values }) => (
          <Container>
            <IInput
              value={values.name}
              style={tailwind("mt-4")}
              label={t("general.name")}
              error={touched.name && errors.name}
              onChangeText={handleChange("name")}
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
            {(isLoading || isEditLoading) && <IText>loading</IText>}
          </Container>
        )}
      </Formik>
    </IBottomSheetModal>
  );
};

export default AddWallet;
