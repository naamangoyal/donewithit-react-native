import React from 'react'
import { Image,StyleSheet, View, StatusBar } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"
export default function ViewImageScreen() {
  return (
    <View style = {styles.container}>
        <MaterialCommunityIcons style = {styles.closeButton} name = "close" size = {30} color = {colors.white}/>
        <MaterialCommunityIcons style = {styles.deleteButton} name = "trash-can-outline" size = {30} color = {colors.white} />
        <Image style = {styles.image} resizeMode='contain' source = {require('../assets/chair.jpg')}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop : StatusBar.currentHeight,
        height: '100%',
        width: '100%',
        backgroundColor: colors.black,

    },
    closeButton:{
        position: 'absolute',
        top : 30,
        left: 10,
    },
    deleteButton:{
        position: 'absolute',
        top : 30,
        right: 10,
    },
    image: {
        height: '100%',
        width : '100%',
    },
});
