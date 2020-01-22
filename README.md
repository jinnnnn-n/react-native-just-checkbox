# react-native-just-checkbox

CheckBox component for React Native
  - customizable color & size & shape(circle/square)
  - supports both iOS and android
  
## Installation
```sh
$ npm install react-native-just-checkbox --save
```

## Example
 ```
 import CheckBox from 'react-native-just-checkbox' 

<CheckBox 
    isChecked={true}
    checkBoxSize={40}
    checkColor='darkturquoise'
    squareCheckBox={true}
/>

 ```
 
 ## Preview
 ![screenshot](https://i.imgur.com/ZI1esd1.png)


### Props
  
| PROPS | DESCRIPTION |TYPE |
| ------ | ------ |-----|
|isChecked|initial state of the checkbox, DEFAULT: false | bool|
|checkBoxSize|size of the checkbox, DEFAULT: 30|number|
|checkColor|color of the checkbox, follows ['React Native Named  colors'](https://facebook.github.io/react-native/docs/colors#named-colors "react-native"),   DEFAULT: 'navy' |string|
|squareCheckBox| By default, we provide a circle-checkbox. By settting this props to true change the shape of the checkbox to square. No props are needed for the circle-checkbox.  |true|
|onToggle|function which is invoked when the checkbox is clicked|function|

### 

