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
                        <View style={styles.profileDetail} >
                            <View style={styles.profileIconBox}>
                                <Image style={styles.profileIcon} source={props.image || require('../assets/naman.png')} />
                            </View>
                            <View style={styles.profileDetailsBox}>
                                <Text style={styles.title}>{props.title || 'Naman Goyal'}</Text>
                                <Text style={styles.subTitle}>{props.subTitle || '10 listing'}</Text>
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
        height: 75,
        width: 75,
    },
    profileIcon: {
        height: '100%',
        width: '100%',
        borderRadius: 50
    },
    profileDetailsBox: {
        paddingLeft: 20,
        justifyContent: 'center',
    },

})
