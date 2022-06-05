import { BottomSheet, BottomSheetProps } from "react-native-btr";
import { Text, View } from "react-native";

import Container from "../Container";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends BottomSheetProps {
  children: React.ReactChild;
  height?: string;
  onClose: () => void;
}

const IBottomSheetModal = ({ children, ...props }: Props) => {
  const tail = useTailwind();

  return (
    <BottomSheet
      onBackButtonPress={props.onClose}
      onBackdropPress={props.onClose}
      {...props}>
      <Container style={tail(`bg-white px-4 pt-4 flex-1`)}>
        {children}
      </Container>
    </BottomSheet>
  );
};

export default IBottomSheetModal;
