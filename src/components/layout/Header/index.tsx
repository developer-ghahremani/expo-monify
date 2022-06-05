import { BackIcon, PlusIcon } from "@src/components/icons";
import { Container, IText, ITouchable } from "@src/components/general";

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  label: string;
  extra?: JSX.Element;
};

const Header = (props: Props) => {
  const tailwind = useTailwind();
  const { goBack } = useNavigation();
  return (
    <Container
      style={tailwind("flex flex-row justify-between items-center px-4 mt-4")}>
      <Container style={tailwind("flex flex-row items-center")}>
        {props.extra}

        <IText style={tailwind("text-xl")}>{props.label}</IText>
      </Container>
      <BackIcon size={22} onPress={goBack} />
    </Container>
  );
};

export default Header;
