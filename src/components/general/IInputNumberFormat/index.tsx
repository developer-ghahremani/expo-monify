import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";

import Container from "../Container";
import IText from "../IText";
import NumberFormat from "react-number-format";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends TextInputProps {
  label?: string;
  error?: string | boolean;
  inputStyle?: StyleProp<ViewStyle>;
}

const IInputNumberFormat = ({
  style,
  inputStyle,
  label,
  error,
  value,
  ...props
}: Props) => {
  const tailwind = useTailwind();

  return (
    <Container style={style}>
      {label && <IText style={tailwind("text-sm")}>{label}</IText>}
      <NumberFormat
        displayType="text"
        thousandSeparator
        value={value}
        renderText={(formated) => (
          <TextInput
            value={formated}
            style={[
              tailwind(
                "py-1 border rounded-md border-gray-300 text-center text-black text-base  font-vazir-base"
              ),
              inputStyle,
            ]}
            {...props}
          />
        )}
      />
      {error && (
        <IText style={tailwind("text-sm text-rose-800")}>{error}</IText>
      )}
    </Container>
  );
};

export default IInputNumberFormat;
