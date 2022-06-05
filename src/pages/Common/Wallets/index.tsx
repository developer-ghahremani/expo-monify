import { BackIcon, PlusIcon } from "@src/components/icons";
import {
  Container,
  IFlatList,
  IText,
  ITouchable,
} from "@src/components/general";

import { MainLayout } from "@src/components/layout";
import React from "react";
import { WalletInterface } from "@src/models/wallet.model";
import { WalletItem } from "@src/components/items";
import { toggleWalletModal } from "@src/store/modal";
import { useAppDispatch } from "@src/store";
import { useGetWalletListQuery } from "@src/store/service/wallet";
import { useI18Next } from "@src/i18n";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

const Wallets = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const { data, isFetching } = useGetWalletListQuery();
  const dispatch = useAppDispatch();
  const { goBack } = useNavigation();

  const handleWalletModal = () => {
    dispatch(toggleWalletModal({}));
  };

  const handleClickWallet = (wallet: WalletInterface) => {
    dispatch(toggleWalletModal(wallet));
  };

  return (
    <MainLayout>
      <Container style={tailwind("px-4 mt-4")}>
        <Container
          style={tailwind("flex flex-row justify-between items-center")}>
          <Container style={tailwind("flex flex-row items-center")}>
            <ITouchable
              style={tailwind("p-2 rounded-full bg-primary")}
              onPress={handleWalletModal}>
              <PlusIcon size={18} color="white" />
            </ITouchable>
            <IText style={tailwind("text-xl")}>{t("general.wallets")}</IText>
          </Container>
          <BackIcon size={22} onPress={goBack} />
        </Container>
        {!isFetching && !!data && (
          <IFlatList
            style={tailwind("mt-4")}
            data={data}
            renderItem={({ item }) => (
              <WalletItem onPress={handleClickWallet} wallet={item} />
            )}
          />
        )}
      </Container>
    </MainLayout>
  );
};

export default Wallets;
