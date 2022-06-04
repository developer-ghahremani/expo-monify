import { FlatList, FlatListProps, Text, View } from "react-native";

import React from "react";

interface Props extends FlatListProps<{}> {}

const IFlatList = (props: Props) => {
  return <FlatList {...props} />;
};

export default IFlatList;
