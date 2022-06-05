import { Text, View } from "react-native";

import ITouchable from "../ITouchable";
import { PlusIcon } from "@src/components/icons";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = { onPress: () => void };

const AddButton = (props: Props) => {
  const tailwind = useTailwind();
  return (
    <ITouchable
      style={tailwind("p-2 rounded-full bg-primary")}
      onPress={props.onPress}>
      <PlusIcon size={18} color="white" />
    </ITouchable>
  );
};

export default AddButton;
