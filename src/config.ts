import { Easing, Animated } from "react-native";

export const IOS_PRIMARY_COLOR = "#007AFF";
export const ANDROID_PRIMARY_COLOR = "#6200EE";

/**
 * Animation configuration for scaling effect.
 */
const SCALE_ANIMATION_CONFIG: {
  PRESS_IN: Animated.TimingAnimationConfig;
  PRESS_OUT: Animated.TimingAnimationConfig;
} = {
  PRESS_IN: {
    toValue: 0.8,
    easing: Easing.in(Easing.bounce),
    duration: 100,
    useNativeDriver: true,
  },
  PRESS_OUT: {
    toValue: 1,
    duration: 100,
    useNativeDriver: true,
  },
};

/**
 * Animation configuration for opacity effect.
 */
const OPACITY_ANIMATION_CONFIG: {
  PRESS_IN: Animated.TimingAnimationConfig;
  PRESS_OUT: Animated.TimingAnimationConfig;
} = {
  PRESS_IN: {
    toValue: 0.2,
    duration: 100,
    useNativeDriver: true,
  },
  PRESS_OUT: {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  },
};

/**
 * Combined animation configurations.
 */
export const ANIMATION_CONFIG: {
  bouncy: typeof SCALE_ANIMATION_CONFIG;
  opacity: typeof OPACITY_ANIMATION_CONFIG;
} = {
  bouncy: SCALE_ANIMATION_CONFIG,
  opacity: OPACITY_ANIMATION_CONFIG,
};
