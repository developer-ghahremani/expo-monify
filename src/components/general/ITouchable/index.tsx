import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import React from "react";

interface Props extends TouchableOpacityProps {}

const ITouchable = ({ children, ...props }: Props) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

export default ITouchable;
