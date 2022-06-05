import { StyleProp, TextStyle } from "react-native";

import { Entypo } from "@expo/vector-icons";
import React from "react";

type Props = {
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
};

const PlusIcon = (props: Props) => <Entypo name="plus" {...props} />;

export default PlusIcon;
