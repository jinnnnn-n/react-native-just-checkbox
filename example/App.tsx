import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { JustCheckBox } from "./components/JustCheckBox";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Default</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.item}>
          <Text>shape: </Text>
          <JustCheckBox />
        </View>
        <View style={styles.item}>
          <Text> isChecked: </Text>
          <JustCheckBox isChecked={true} />
        </View>
      </View>
      <View style={{ padding: 20 }}></View>
      <Text style={styles.title}>Custom</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.item}>
          <Text>square: </Text>
          <JustCheckBox squareCheckBox={true} />
        </View>
        <View style={styles.item}>
          <Text> isDisabled: </Text>
          <JustCheckBox squareCheckBox isDisabled />
        </View>
      </View>
      <View style={styles.checkBoxContainer}>
        <View style={styles.item}>
          <Text>color: </Text>
          <JustCheckBox checkColor="#f6a8f8" />
          <JustCheckBox checkColor="#bfade7" />
          <JustCheckBox checkColor="#fff75f" />
          <JustCheckBox checkColor="#93dad0" />
        </View>
      </View>
      <View style={styles.checkBoxContainer}>
        <View style={styles.item}>
          <Text>size: </Text>
          <JustCheckBox checkBoxSize={20} isChecked={true} />
          <JustCheckBox checkBoxSize={25} />
          <JustCheckBox checkBoxSize={30} isChecked={true} />
          <JustCheckBox checkBoxSize={35} />
          <JustCheckBox checkBoxSize={40} isChecked={true} />
        </View>
      </View>
    </View>
  );
}

// GR_PK_0: ['#E0FFEE', '#ffdff9'],
// PK_0: Array(2).fill('#ffdff9'),
// MI_0: Array(2).fill('#dcf7f3'),
// MI_1: Array(2).fill('#E0FFEE'),
// YL_0: Array(2).fill('#FEFFC0'),
// OR_0: Array(2).fill('#FFE6C0'),
// PK_1: Array(2).fill('#FEC0FF'),
// VT_0: Array(2).fill('#ddcffc'),
// GR_0: Array(2).fill('#E5E5E5'),

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  checkBoxContainer: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  item: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
