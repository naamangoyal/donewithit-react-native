import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import colors from '../config/colors';


export default function AppButton(props) {
  return (
    <>
    <TouchableHighlight style = {[styles.buttonContainer, props.style]} onPress = {()=>console.log(props.title + " clicked")}>
      <Text style = {styles.text}>{props.title}</Text>
    </TouchableHighlight>
    </>
  );
}
const styles = StyleSheet.create({
    buttonContainer:{
        width: '100%',
        borderRadius : 10,
        padding: 12,
        marginBottom : 10
    },
    text:{
      color : colors.white,
      fontSize : 18,
      textAlign: 'center',
      textTransform: 'capitalize'
    }
})
