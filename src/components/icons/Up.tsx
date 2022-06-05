import { AntDesign } from "@expo/vector-icons";
import React from "react";

type Props = { size?: number; color?: string; onPress?: () => void };

const DownIcon = (props: Props) => <AntDesign name="caretup" {...props} />;

export default DownIcon;
