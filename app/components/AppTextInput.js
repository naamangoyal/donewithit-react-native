import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function AppTextInput(props) {
  return (
    <View style = {styles.textContainer}>
        <MaterialCommunityIcons name = {props.name || 'email'} size = {18}/>
        <TextInput style = {styles.text} placeholder={props.placeholder || 'First Name'}></TextInput>
        
    </View>
  )
}

const styles = StyleSheet.create({
    textContainer: {
        // backgroundColor : colors.light,
        marginHorizontal: 15,
        borderColor: 'black',
        borderWidth: 0.25 ,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,


    },
    text:{
        fontSize : 18,
        marginLeft: 10,
    },
})