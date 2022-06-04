import { StyleProp, StyleSheet, Text, View, ViewProps } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewProps;
};

const HomeIcon = (props: Props) => <Ionicons name="home-outline" {...props} />;

export default HomeIcon;
