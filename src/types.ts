export type PRESS_TYPE = "PRESS_IN" | "PRESS_OUT";
export type ANIMATION_TYPE = "bouncy" | "opacity" | "none";

export enum ANIMATION_TYPES {
  BOUNCY = "bouncy",
  OPACITY = "opacity",
  NONE = "none",
}

export interface CheckBoxProps {
  /**
   * Whether the checkbox is checked or not
   * */
  isChecked: boolean;
  /**
   * Whether the checkbox is disabled or not, makes touch event disabled and set opacity to 0.2
   * */
  isDisabled?: boolean;
  /**
   * Size of the checkbox (applied to both width and height), default is 20
   */
  checkBoxSize?: number;
  /**
   * Color of the checkmark, default is #1a1a1a
   * */
  checkColor?: string;
  /**
   * Animation of the checkbox, default type is 'none'
   * */
  animationType?: ANIMATION_TYPE;
  /**
   * Whether to fill the background of the CheckBox, if set true,
   * Platform specific primary colors are used
   * */
  fillMode?: boolean;
  /**
   * Background fill color of the CheckBox, overrides Platform primary color
   * */
  fillColor?: string;
  /**
   * BorderWidth of the checkbox container and the check mark.
   * */
  borderWidth?: number;
  /**
   * BorderRadius of the CheckBox
   * */
  borderRadius?: number;
  /** Function called when the checkbox is pressed */
  onPress?: () => void;
}
