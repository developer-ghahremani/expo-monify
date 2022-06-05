import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
};

const CheckMarkIcon = (props: Props) => (
  <Ionicons name="checkmark-circle" {...props} />
);

export default CheckMarkIcon;
