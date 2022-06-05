import { DownIcon, UpIcon } from "@src/components/icons";
import React, { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";

import Container from "../Container";
import IText from "../IText";
import ITouchable from "../ITouchable";
import ModalPicker from "./ModalPicker";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  style?: StyleProp<ViewStyle>;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  label?: string;
  error?: boolean | string;
};

const IPicker = (props: Props) => {
  const tailwind = useTailwind();
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleOptionModal = () => {
    setShowModal((s) => !s);
  };

  const handlChange = (val: string) => {
    toggleOptionModal();
    props.onChange(val);
  };

  return (
    <>
      <Container style={[tailwind("flex"), props.style]}>
        {props.label && <IText>{props.label}</IText>}
        <ITouchable
          onPress={toggleOptionModal}
          style={[
            tailwind(
              "py-3 border rounded-md border-gray-300 text-center text-black text-base flex flex-row justify-between px-3 items-center"
            ),
          ]}>
          <Container style={{ width: 16 }} />
          <IText style={tailwind("font-vazir-bold")}>
            {props.options.find((item) => item.value === props.value)?.label}
          </IText>
          {!showModal ? <DownIcon size={15} /> : <UpIcon size={15} />}
        </ITouchable>
        {props.error && (
          <IText style={tailwind("text-sm text-rose-800")}>{props.error}</IText>
        )}
      </Container>
      <ModalPicker
        onChange={handlChange}
        value={props.value}
        visible={showModal}
        options={props.options}
        onClose={toggleOptionModal}
      />
    </>
  );
};

export default IPicker;
