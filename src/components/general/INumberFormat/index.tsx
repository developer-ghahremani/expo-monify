import NumberFormat, { NumberFormatProps } from "react-number-format";

import IText from "../IText";
import React from "react";

interface Props extends NumberFormatProps {}

const INumberFormat = (props: Props) => {
  return (
    <NumberFormat
      {...props}
      renderText={(formated) => <IText style={props.style}>{formated}</IText>}
    />
  );
};

export default INumberFormat;
