import { Animated, Platform, ViewStyle } from "react-native";
import {
  ANDROID_PRIMARY_COLOR,
  ANIMATION_CONFIG,
  IOS_PRIMARY_COLOR,
} from "./config";
import {
  ANIMATION_TYPE,
  ANIMATION_TYPES,
  CheckBoxProps,
  PRESS_TYPE,
} from "./types";

/**
 * Handles animation based on the given animation type and press type.
 */
export const handleAnimation = (
  animRef: Animated.Value,
  animationType: ANIMATION_TYPE = ANIMATION_TYPES.NONE,
  pressType: PRESS_TYPE
): void => {
  if (animationType !== ANIMATION_TYPES.NONE) {
    Animated.timing(
      animRef,
      ANIMATION_CONFIG[animationType][pressType]
    ).start();
  }
};

/**
 * Returns the animation style object based on the animation type.
 */
export const getAnimationStyle = (
  type: ANIMATION_TYPE,
  animRef: Animated.Value
) => {
  switch (type) {
    case ANIMATION_TYPES.OPACITY:
      return { opacity: animRef };
    case ANIMATION_TYPES.BOUNCY:
      return { transform: [{ scale: animRef }] };
    default:
      return {};
  }
};

/**
 * Returns the fill color based on the provided parameters.
 */
export const getFillColor = (
  fillColor: string | undefined,
  fillMode: boolean
): string | undefined => {
  if (fillColor) {
    return fillColor;
  }

  if (fillMode) {
    return Platform.OS === "ios" ? IOS_PRIMARY_COLOR : ANDROID_PRIMARY_COLOR;
  }

  return undefined;
};

/**
 * Returns the check color based on the provided parameters.
 */
const getCheckColor = (
  checkColor: string | undefined,
  fillColor: string | undefined,
  fillMode: boolean
): string => {
  const _checkColor = checkColor
    ? checkColor
    : fillColor || fillMode
    ? "#FFFFFF"
    : "#1a1a1a";

  return _checkColor;
};

/**
 * Derives styles for the CheckBox component based on props and animation state.
 * @returns Object containing container style and check mark style
 */
export const getCheckBoxStyles = (
  {
    checkColor,
    checkBoxSize = 20,
    animationType = ANIMATION_TYPES.NONE,
    borderWidth = 1.5,
    borderRadius = 3,
    fillMode = false,
    fillColor,
  }: Omit<CheckBoxProps, "isChecked" | "onPress">,
  animRef: Animated.Value
): { containerStyle: ViewStyle; checkMarkStyle: ViewStyle } => {
  const _fillColor = getFillColor(fillColor, fillMode);
  const _checkColor = getCheckColor(checkColor, fillColor, fillMode);

  // Container style for the CheckBox
  const containerStyle = {
    justifyContent: "center",
    alignItems: "center",
    width: checkBoxSize,
    height: checkBoxSize,
    borderColor: fillColor || fillMode ? _fillColor : _checkColor,
    borderWidth: borderWidth,
    borderRadius: borderRadius > -1 ? borderRadius : checkBoxSize,
    backgroundColor: _fillColor,
    ...getAnimationStyle(animationType, animRef),
  } as ViewStyle;

  // Check mark style within the CheckBox
  const checkMarkStyle = {
    borderColor: _checkColor,
    width: checkBoxSize * 0.28 * 1.8,
    height: checkBoxSize * 0.28,
    borderLeftWidth: borderWidth,
    borderBottomWidth: borderWidth,
    transform: [{ rotate: "-45deg" }, { translateY: -1 }, { translateX: 0.5 }],
  } as ViewStyle;

  return { containerStyle, checkMarkStyle };
};
