import NumberFormat, { NumberFormatProps } from "react-number-format";

import IText from "../IText";
import React from "react";

interface Props extends NumberFormatProps {}

const INumberFormat = (props: Props) => {
  return (
    <NumberFormat
      {...props}
      renderText={(formated) => <IText>{formated}</IText>}
    />
  );
};

export default INumberFormat;
