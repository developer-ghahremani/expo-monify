import { CheckMark } from "@src/components/icons";
import { CloseIcon } from "@src/components/icons";
import Container from "../Container";
import IBottomSheetModal from "../IBottomSheet";
import IText from "../IText";
import ITouchable from "../ITouchable";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  visible: boolean;
  onClose: () => void;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

const ModalPicker = (props: Props) => {
  const tailwind = useTailwind();
  return (
    <IBottomSheetModal {...props}>
      <Container>
        <CloseIcon
          size={22}
          onPress={props.onClose}
          style={tailwind("self-end")}
        />
        <Container style={tailwind("mt-4")}>
          {props.options.map((item) => (
            <ITouchable
              onPress={() => props.onChange(item.value)}
              key={item.label}
              style={tailwind("flex mt-2")}>
              <Container
                key={item.label}
                style={tailwind("flex flex-row justify-between items-center")}>
                <IText style={tailwind("text-lg")}>{item.label}</IText>
                {item.value === props.value && (
                  <CheckMark
                    type="circle"
                    style={tailwind("text-primary")}
                    size={25}
                  />
                )}
              </Container>
              <Container style={tailwind("h-[1.5px] bg-gray-light")} />
            </ITouchable>
          ))}
        </Container>
      </Container>
    </IBottomSheetModal>
  );
};

export default ModalPicker;
