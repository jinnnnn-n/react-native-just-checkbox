![screenshot](https://i.imgur.com/8ydX1ES.png)

# react-native-just-checkbox (v2)

react-native-just-checkbox is a customizable checkbox component for React Native, offering a variety of configuration options to suit your app's needs.

##### Key features

- Customizable size and color.
- Animation options.
- Fill mode for different platforms.

> 📌 [Migration Guide from v1 to v2](https://jinyoungjoh.gitbook.io/react-native-just-checkbox/migration-guide-v1-to-v2)

## Getting Started

### Installation

First, install the package:

```
$ npm install react-native-just-checkbox
```

### Quick Start

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } 'react-native-just-checkbox';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox isChecked={isChecked} onPress={() => setIsChecked(!isChecked)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    justifyContent: "center",
    paddingHorizontal: 50,
  }
});

```

### Props

| Prop          | Type                            | Description                                                                                                                                                                               | Default |
| ------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| isChecked     | boolean                         | Whether the checkbox is checked or not.                                                                                                                                                   | -       |
| isDisabled    | boolean                         | Whether the checkbox is disabled or not. Disabled checkboxes will not trigger touch events and their opacity will be set to 0.2.                                                          | false   |
| checkBoxSize  | number                          | The size of the checkbox (applied to both width and height).                                                                                                                              | 20      |
| checkColor    | string                          | The color of the checkmark.                                                                                                                                                               | #1a1a1a |
| animationType | "bounce" \| "opacity" \| "none" | The animation type for the checkbox.                                                                                                                                                      | "none"  |
| fillMode      | boolean                         | Whether to fill the background of the CheckBox. If fillMode is set to true , fill color is automatically set to iOS and Android primary colors followed by HIG and Material Design guide. | false   |
| fillColor     | string                          | The background fill color of the CheckBox.                                                                                                                                                | -       |
| borderWidth   | number                          | The border width of the CheckBox.                                                                                                                                                         | 1.5     |
| borderRadius  | number                          | The border radius of the CheckBox.                                                                                                                                                        | 3       |
| onPress       | () => void                      | Function called when the checkbox is pressed.                                                                                                                                             | -       |

## Additional

- [Basic/Advanced Usage Examples](https://jinyoungjoh.gitbook.io/react-native-just-checkbox/examples)
- [Detailed Change Log from v1 to v2](https://jinyoungjoh.gitbook.io/react-native-just-checkbox/change-log)
