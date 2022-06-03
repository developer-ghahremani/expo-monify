import { View, ViewProps } from "react-native";

import React from "react";

interface Props extends ViewProps {}

const Container = ({ children, ...props }: Props) => {
  return <View {...props}>{children}</View>;
};

export default Container;
