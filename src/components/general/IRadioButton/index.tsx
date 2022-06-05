import { Text, View } from "react-native";

import CheckMarkIcon from "@src/components/icons/CheckMark";
import Container from "../Container";
import IText from "../IText";
import ITouchable from "../ITouchable";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  label: string;
  checked?: boolean;
  onChange: () => void;
};

const IRadioButton = (props: Props) => {
  const tailwind = useTailwind();
  return (
    <ITouchable
      onPress={props.onChange}
      style={tailwind("flex flex-row items-center")}>
      <Container
        style={tailwind(
          `w-4 h-4 rounded-base border flex- justify-center items-center ${
            props.checked
              ? "bg-primary border-primary"
              : "bg-white border-darkGray"
          }`
        )}>
        <CheckMarkIcon color="white" />
      </Container>
      <IText style={tailwind("text-base mx-3")}>{props.label}</IText>
    </ITouchable>
  );
};

export default IRadioButton;
