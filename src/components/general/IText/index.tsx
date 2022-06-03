import { Text, TextProps } from "react-native";

import React from "react";

// import { useTailwind } from "tailwind-rn/dist";

interface Props extends TextProps {}

const IText = ({ children, style, ...props }: Props) => {
  // const tailwind = useTailwind();
  return (
    <Text style={[style]} {...props}>
      {children}
    </Text>
  );
};

export default IText;
