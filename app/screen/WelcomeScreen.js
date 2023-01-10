import React from 'react'
import { Image , ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
export default function WelcomeScreen() {
  return (
    <>
    <ImageBackground style = {styles.imageBackground} source = {require('../assets/background.jpg')}>
        <View style = {styles.logoContainer}>
            <Image style = {styles.logo} source = {require('../assets/logo-red.png')}/>
            <Text>Sell want you don't use now</Text>
        </View>

        <View style = {styles.buttonContainer}>
            <AppButton title = 'Login' style = {{backgroundColor: colors.primary }}/>
            <AppButton title = "register" style = {{backgroundColor: colors.secondary}}/>
        </View>

    </ImageBackground>
    
    </>
  );

  
}
const styles = StyleSheet.create({
    imageBackground: {
        flex : 1, 
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    logoContainer: {
        position: 'absolute',
        top : 100,
        alignItems: 'center',
    },
    
    logo:{
        height : 100,
        width : 100,

    },
    buttonContainer:{
        paddingHorizontal: 10,
        width : '100%'
    },
    
    
  })