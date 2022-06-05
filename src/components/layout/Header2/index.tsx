import { Container, IText } from "@src/components/general";

import { CloseIcon } from "@src/components/icons";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  onPressClose?: () => void;
  title?: string;
};

const Header2 = (props: Props) => {
  const tailwind = useTailwind();

  const handleClose = () => {
    props.onPressClose && props.onPressClose();
  };

  return (
    <Container style={tailwind("flex flex-row items-center")}>
      <CloseIcon size={20} onPress={handleClose} />
      <IText style={tailwind("font-vazir-bold text-lg mx-4")}>
        {props.title}
      </IText>
    </Container>
  );
};

export default Header2;
