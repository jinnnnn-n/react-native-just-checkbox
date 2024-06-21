import React, { useState } from "react";
import { CheckBox } from "react-native-just-checkbox";

export const JustCheckBox = ({
  isChecked = false, // Define if the checkbox is initially checked
  squareCheckBox = false, // Define if the checkbox should be square
  isDisabled = false,
  checkColor, // Define the color of the checkbox
  checkBoxSize, // Define the size of the checkbox
}: {
  isChecked?: boolean;
  squareCheckBox?: boolean;
  isDisabled?: boolean;
  checkColor?: string;
  checkBoxSize?: number;
}) => {
  const [checked, setChecked] = useState(isChecked);
  const onPress = () => setChecked(!checked);

  return (
    <CheckBox
      onToggle={onPress}
      isChecked={checked}
      squareCheckBox={squareCheckBox}
      checkColor={checkColor}
      checkBoxSize={checkBoxSize}
      isDisabled={isDisabled}
    />
  );
};
