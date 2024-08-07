import React, { useRef } from "react";
import { Animated, Pressable, View } from "react-native";
import { getCheckBoxStyles, handleAnimation } from "./utils";
import { CheckBoxProps } from "./types";

// Create an animated version of Pressable
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const CheckBox = ({
  isChecked,
  isDisabled = false,
  onPress,
  ...styleProps
}: CheckBoxProps) => {
  const animRef = useRef(new Animated.Value(1)).current;
  const { containerStyle, checkMarkStyle } = getCheckBoxStyles(
    styleProps,
    animRef
  );

  return (
    <AnimatedPressable
      onPress={onPress}
      disabled={isDisabled}
      style={[containerStyle, isDisabled && { opacity: 0.2 }]}
      onPressIn={() =>
        handleAnimation(animRef, styleProps.animationType, "PRESS_IN")
      }
      onPressOut={() =>
        handleAnimation(animRef, styleProps.animationType, "PRESS_OUT")
      }
      hitSlop={8}
    >
      {isChecked && <View style={checkMarkStyle} />}
    </AnimatedPressable>
  );
};
