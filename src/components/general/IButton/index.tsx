import {
  ButtonProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import IText from "../IText";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends TouchableOpacityProps {}

const IButton = ({ label, style, children, ...props }: Props) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      style={[tailwind("w-full border rounded-md border-gray-300 py-2"), style]}
      {...props}>
      {typeof children === "string" ? (
        <IText style={tailwind("text-center")}>{children}</IText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default IButton;
