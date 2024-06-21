import React from "react";
import { TouchableOpacity, Image } from "react-native";

type CheckBoxProps = {
  /** Whether the checkbox is checked or not */
  isChecked: boolean;
  /** Whether the checkbox is disabled or not, makes touch event disabled and opacity be set to 0.2 */
  isDisabled?: boolean;
  /** Size of the checkbox (applied to both width and height), default is 30 */
  checkBoxSize?: number;
  /** Color of the checkmark, default is #1a1a1a */
  checkColor?: string;
  /** Whether the checkbox is square-shaped (true) or circle-shaped (false) */
  squareCheckBox?: boolean;
  /** Function to call when the checkbox is toggled */
  onToggle: () => void;
};

const getImageSource = (
  isChecked: boolean,
  squareCheckBox: boolean = false
) => {
  if (squareCheckBox) {
    return isChecked
      ? require("./assets/checkSquare.png")
      : require("./assets/square.png");
  } else {
    return isChecked
      ? require("./assets/checkCircle.png")
      : require("./assets/circle.png");
  }
};

export const CheckBox = ({
  checkBoxSize = 30,
  checkColor = "#1a1a1a",
  isDisabled = false,
  isChecked,
  squareCheckBox,
  onToggle,
}: CheckBoxProps) => {
  const imageSource = getImageSource(isChecked, squareCheckBox);

  return (
    <TouchableOpacity onPress={onToggle} disabled={isDisabled}>
      <Image
        style={[
          {
            width: checkBoxSize,
            height: checkBoxSize,
            tintColor: checkColor,
          },
          isDisabled && { opacity: 0.2 },
        ]}
        source={imageSource}
      />
    </TouchableOpacity>
  );
};
