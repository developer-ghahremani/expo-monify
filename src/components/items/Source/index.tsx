import { Container, INumberFormat, IText } from "@src/components/general";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { SourceInterface } from "@src/models/source.model";
import { useTailwind } from "tailwind-rn/dist";

type Props = { source: SourceInterface };

const SourceItem = (props: Props) => {
  const tailwind = useTailwind();
  return (
    <Container
      style={tailwind(
        "bg-white mx-2 w-80 h-44 p-4 rounded-xl flex justify-between border border-primary"
      )}>
      <IText>{props.source.name}</IText>
      <INumberFormat
        style={tailwind("font-vazir-bold text-md")}
        displayType="text"
        value={props.source.amount}
        thousandSeparator
      />
    </Container>
  );
};

export default SourceItem;
