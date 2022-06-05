import { AddButton, IFlatList } from "@src/components/general";
import { Header, MainLayout } from "@src/components/layout";

import React from "react";
import { WalletInterface } from "@src/models/wallet.model";
import { WalletItem } from "@src/components/items";
import { toggleWalletModal } from "@src/store/modal";
import { useAppDispatch } from "@src/store";
import { useGetWalletListQuery } from "@src/store/service/wallet";
import { useI18Next } from "@src/i18n";
import { useTailwind } from "tailwind-rn/dist";

const Wallets = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const { data, isFetching } = useGetWalletListQuery();
  const dispatch = useAppDispatch();

  const handleWalletModal = () => {
    dispatch(toggleWalletModal());
  };

  const handleClickWallet = (wallet: WalletInterface) => {
    dispatch(toggleWalletModal(wallet));
  };

  return (
    <MainLayout>
      <Header
        extra={<AddButton onPress={handleWalletModal} />}
        label={t("general.wallets")}
      />
      {!isFetching && !!data && (
        <IFlatList
          style={tailwind("mt-4")}
          data={data}
          renderItem={({ item }) => (
            <WalletItem onPress={handleClickWallet} wallet={item} />
          )}
        />
      )}
    </MainLayout>
  );
};

export default Wallets;
