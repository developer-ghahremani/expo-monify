import {
  Container,
  IBottomSheetModal,
  IButton,
  IInput,
  IInputNumberFormat,
  INumberFormat,
  IRadioButton,
  IText,
} from "@src/components/general";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@src/store";

import { Formik } from "formik";
import { Header2 } from "@src/components/layout";
import { SourceType } from "@src/cosntant";
import { setSelectedWallet } from "@src/store/selectedWallet";
import { toggleSourceModal } from "@src/store/modal";
import { useI18Next } from "@src/i18n";
import { usePostSourceMutation } from "@src/store/service/source";
import { useTailwind } from "tailwind-rn/dist";

const AddSource = () => {
  const { source } = useAppSelector((s) => s.modal);
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const dispatch = useAppDispatch();
  const tailwind = useTailwind();
  const [sourceType, setSourceType] = useState<string>(SourceType.Bank);
  const [postSource] = usePostSourceMutation();
  const { t } = useI18Next();

  const handleChangeSourceType = (params: string) => {
    setSourceType(params);
  };

  const handleClose = () => {
    dispatch(toggleSourceModal());
  };

  const handleFinish = async (params: {
    name: string;
    initialAmount: string;
  }) => {
    // return console.log(params.initialAmount.split(",").join(""));

    try {
      await postSource({
        initialAmount: +params.initialAmount.split(",").join(""),
        name: params.name,
        type: sourceType,
        walletId: selectedWallet._id || "",
      }).unwrap();

      dispatch(
        setSelectedWallet({
          ...selectedWallet,
          amount:
            +selectedWallet.amount + +params.initialAmount.split(",").join(""),
        })
      );
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IBottomSheetModal visible={source.visible} onClose={handleClose}>
      <Header2 title={t("general.addSource")} onPressClose={handleClose} />
      <Container style={tailwind("flex mt-4")}>
        <INumberFormat
          thousandSeparator
          value={selectedWallet.amount}
          displayType="text"
        />
        <IText style={tailwind("text-base font-vazir-bold")}>
          {t("general.sourceType")}
        </IText>
        <Container style={tailwind("flex flex-row mt-2")}>
          <IRadioButton
            checked={sourceType === SourceType.Bank}
            label={t("general.bank")}
            onChange={() => handleChangeSourceType(SourceType.Bank)}
          />
          <IRadioButton
            checked={sourceType === SourceType.Cash}
            label={t("general.cash")}
            onChange={() => handleChangeSourceType(SourceType.Cash)}
          />
        </Container>
        <Formik
          initialValues={{ name: "", initialAmount: "" }}
          onSubmit={handleFinish}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <Container>
              <IInput
                label={t("general.name")}
                onChangeText={handleChange("name")}
                value={values.name}
              />
              <IInputNumberFormat
                label={t("general.initialAmount")}
                style={tailwind("mt-2")}
                onChangeText={handleChange("initialAmount")}
                value={values.initialAmount}
              />
              <IButton
                style={tailwind("mt-2 bg-primary")}
                onPress={handleSubmit}>
                {t("general.submit")}
              </IButton>
            </Container>
          )}
        </Formik>
      </Container>
    </IBottomSheetModal>
  );
};

export default AddSource;
