import { AddButton, IFlatList } from "@src/components/general";
import { Header, MainLayout } from "@src/components/layout";
import { useAppDispatch, useAppSelector } from "@src/store";

import React from "react";
import { SourceItem } from "@src/components/items";
import { toggleSourceModal } from "@src/store/modal";
import { useDispatch } from "react-redux";
import { useGetSourcesQuery } from "@src/store/service/source";
import { useI18Next } from "@src/i18n";

const Sources = () => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const { t } = useI18Next();
  const disptch = useAppDispatch();
  const { data, isFetching } = useGetSourcesQuery(
    { waletId: selectedWallet._id || "" },
    { skip: !selectedWallet._id }
  );

  const handleAddSource = () => {
    disptch(toggleSourceModal());
  };

  return (
    <MainLayout>
      <Header
        label={t("general.sources")}
        extra={<AddButton onPress={handleAddSource} />}
      />
      {!isFetching && data && (
        <IFlatList
          data={data}
          renderItem={({ item }) => <SourceItem source={item} />}
        />
      )}
    </MainLayout>
  );
};

export default Sources;
