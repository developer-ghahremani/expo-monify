import { Container, IFlatList, IText } from "@src/components/general";
import { Text, View } from "react-native";

import React from "react";
import { SourceItem } from "@src/components/items";
import { useAppSelector } from "@src/store";
import { useGetSourcesQuery } from "@src/store/service/source";
import { useTailwind } from "tailwind-rn/dist";

const Sources = () => {
  const tailwind = useTailwind();
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const { data, isFetching } = useGetSourcesQuery(
    {
      waletId: selectedWallet._id || "",
    },
    { skip: !selectedWallet._id }
  );
  return (
    <Container style={tailwind("mt-4")}>
      <IFlatList
        data={data}
        horizontal
        inverted
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <SourceItem source={item} />}
      />
    </Container>
  );
};

export default Sources;
