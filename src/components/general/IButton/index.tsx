import {
  ButtonProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import IText from "../IText";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends TouchableOpacityProps {
  label: string;
}

const IButton = ({ label, style, ...props }: Props) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      style={[tailwind("w-full border rounded-md border-gray-300 py-2"), style]}
      {...props}>
      <IText style={tailwind("text-center")}>{label}</IText>
    </TouchableOpacity>
  );
};

export default IButton;
