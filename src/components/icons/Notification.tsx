import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = { size?: number; color?: string; onPress?: () => void };

const NotificationIcon = (props: Props) => (
  <Ionicons name="notifications-outline" {...props} />
);

export default NotificationIcon;
