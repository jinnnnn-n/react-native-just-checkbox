import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-just-checkbox'

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Default</Text>
          <View style={styles.checkBoxContainer}>
            <View style={styles.item}>
              <Text>shape: </Text>
              {/* default checkbox without props */}
              <CheckBox/>
            </View>
            <View style={styles.item}>
              <Text> isChecked: </Text>
              {/* default checkbox which is checked */}
              <CheckBox isChecked={true}/>
            </View>
          </View>
          <View style={{padding:20}}></View>
          <Text style={styles.title}>Custom</Text>
          <View style={styles.checkBoxContainer}>
            <View style={styles.item}>
              <Text>square: </Text>
              {/* a square checkbox */}
              <CheckBox squareCheckBox={true}/>
            </View>
            <View style={styles.item}>
              {/* a checked square checkbox */}
              <Text> isChecked: </Text>
              <CheckBox squareCheckBox={true} isChecked={true}/>
            </View>
          </View>
          <View style={styles.checkBoxContainer}>
            <View style={styles.item}>
              <Text>color: </Text>
              {/* checkbox with different colors */}
              <CheckBox checkColor='darkturquoise'/>
              <CheckBox checkColor='darkviolet'/>
              <CheckBox checkColor='deeppink'/>
              <CheckBox checkColor='lightgray'/>
              <Text>  and more...:) </Text>
            </View>
          </View>
          <View style={styles.checkBoxContainer}>
            <View style={styles.item}>
            <Text style={{marginLeft: -10}}>size: </Text>
              {/* checkbox with different sizes */}
              <CheckBox checkBoxSize={20} isChecked={true}/>
              <CheckBox checkBoxSize={25}/>
              <CheckBox checkBoxSize={30} isChecked={true}/>
              <CheckBox checkBoxSize={35}/>
              <CheckBox checkBoxSize={40} isChecked={true} squareCheckBox={true}/>
            </View>
          </View>
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft:50,
  },
  checkBoxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  item:{
    flex:1,
    paddingVertical: 20,
    paddingHorizontal: 50,
    flexDirection:'row', 
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
