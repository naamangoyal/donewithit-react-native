import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"


export default function ListItemDeleteAction(props) {
  return (

    <TouchableWithoutFeedback onPress={props.onPress}>
        <View style = {styles.container}>
            <MaterialCommunityIcons style = {styles.trashButton} name = "trash-can-outline" color={colors.white} size = {30}/>
        </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    container: {
        width : 70,
        backgroundColor: colors.danger,
        position: 'relative',
    },
    trashButton:{
        position : 'relative',
        top : 20,
        left : 20,
    }  

})