import { StyleProp, StyleSheet, Text, View, ViewProps } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewProps;
};

const SettingIcon = (props: Props) => (
  <Ionicons name="settings-outline" {...props} />
);

export default SettingIcon;
