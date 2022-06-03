import { TextInput, TextInputProps } from "react-native";

import Container from "../Container";
import IText from "../IText";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends TextInputProps {
  label?: string;
  error?: string | boolean;
}

const IInput = ({ style, label, error, ...props }: Props) => {
  const tailwind = useTailwind();
  return (
    <Container>
      {label && <IText style={tailwind("text-sm")}>{label}</IText>}
      <TextInput
        style={[
          tailwind(
            "py-1 border rounded-md border-gray-300 text-center text-black text-base"
          ),
          style,
        ]}
        {...props}
      />
      {error && (
        <IText style={tailwind("text-sm text-rose-800")}>{error}</IText>
      )}
    </Container>
  );
};

export default IInput;
