import React from 'react'
import { Image, Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Swipeable} from 'react-native-gesture-handler'

export default function ListItems(props) {
    return (
            <GestureHandlerRootView>
                <Swipeable renderRightActions = {props.renderRightActions}>
                    <TouchableHighlight onPress={props.onPress} underlayColor={colors.light}>
                        <View style={[styles.profileDetail, {backgroundColor : props.backgroundColor || colors.white}]} >
                            {props.IconComponent}
                            {props.image && <Image style={styles.profileIcon} source={props.image || require('../assets/naman.png')} />}
                            {/* <View style={styles.profileIconBox}>
                            </View> */}
                            <View style={styles.profileDetailsBox}>
                                <Text style={styles.title}>{props.title || 'Naman Goyal'}</Text>
                                {props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text>}
                            </View>
                        </View>
                    </TouchableHighlight>
                </Swipeable>
            </GestureHandlerRootView>
    )

    
}
const styles = StyleSheet.create({
    // profile details 
    profileDetail: {
        flexDirection: 'row',
        padding: 15
    },
    profileIconBox: {
        height: 60,
        width: 60,
    },
    profileIcon: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    profileDetailsBox: {
        paddingLeft: 20,
        justifyContent: 'center',
    },
    title:{
        fontWeight: '500',
        fontSize : 18,
    },
    subTitle:{
        fontSize : 14,

    },


})
