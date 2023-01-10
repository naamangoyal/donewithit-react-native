import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

export default function Screen(props) {
  return (
    <>
        <View style = {styles.screenContainer}>
            {props.children}
        </View>
    </>
  )
}
const styles = StyleSheet.create({
    screenContainer: {
        marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
})