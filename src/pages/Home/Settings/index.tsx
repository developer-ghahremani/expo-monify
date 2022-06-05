import { Container, IText, ITouchable } from "@src/components/general";

import { MainLayout } from "@src/components/layout";
import React from "react";
import { pageNames } from "@src/cosntant";
import { useI18Next } from "@src/i18n";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

const options: { title: string; path: string }[] = [
  { title: "wallets", path: pageNames.wallet.list },
  { title: "categories", path: pageNames.category.list },
  { title: "transactions", path: pageNames.transaction.list },
];

const SettingsScreen = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const { navigate } = useNavigation();

  const handleChangePage = (to: string) => {
    navigate(to);
  };

  return (
    <MainLayout>
      <Container style={tailwind("px-4")}>
        {options.map((item) => (
          <ITouchable
            onPress={() => handleChangePage(item.path)}
            key={item.title}
            style={tailwind("mt-3")}>
            <IText style={tailwind("text-base")}>
              {t(`general.${item.title}`)}
            </IText>

            <Container style={tailwind("h-[1px] bg-darkGray")} />
          </ITouchable>
        ))}
      </Container>
    </MainLayout>
  );
};

export default SettingsScreen;
