import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = { size?: number; color?: string; onPress?: () => void };

const BackIcon = (props: Props) => <Ionicons name="arrow-back" {...props} />;

export default BackIcon;
