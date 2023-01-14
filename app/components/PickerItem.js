import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../config/colors'

export default function PickerItem(props) {
  return (
    <TouchableHighlight style = {[styles.container, props.style] } onPress = {props.onPress}>
        <Text style = {styles.text}>{props.label || 'Naman'}</Text>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
    container : {
        marginHorizontal: 10,
        padding: 10,
        marginVertical : 10,
        borderRadius: 25,

    },
    text:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,

    }
})