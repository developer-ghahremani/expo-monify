import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  type?: "circle";
};

const CheckMarkIcon = ({ type, ...props }: Props) => {
  if (type === "circle") return <Ionicons name="checkmark-circle" {...props} />;
  return <Ionicons name="checkmark" {...props} />;
};

export default CheckMarkIcon;
