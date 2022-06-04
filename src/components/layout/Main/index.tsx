import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@src/store";

import { SafeAreaView } from "react-native-safe-area-context";
import { setSelectedWallet } from "@src/store/selectedWallet";
import { useGetWalletsMutation } from "@src/store/service/wallet";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const tailwind = useTailwind();
  const user = useAppSelector((s) => s.user);
  const [getWallets] = useGetWalletsMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleGetWallets();
  }, [user]);

  const handleGetWallets = async () => {
    try {
      const data = await getWallets().unwrap();
      dispatch(setSelectedWallet(data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={tailwind("bg-gray-light flex-1")}>
      {props.children}
    </SafeAreaView>
  );
};

export default MainLayout;
