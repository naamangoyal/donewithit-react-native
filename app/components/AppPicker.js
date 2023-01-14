import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from './AppButton'
import Screen from './Screen'
import PickerItem from './PickerItem'


// Props are : iconName , placeholder , data 
export default function AppPicker(props) {
    const [modalVisible,setModalVisible] = useState(false);
    const [catergory, setCatergory] = useState('');
    return (
        <>
        <TouchableWithoutFeedback onPress = {()=>setModalVisible(true)}>
            <View style={styles.textContainer}>
                <MaterialCommunityIcons name={props.iconName || 'email'} size={20} />
                <Text style = {styles.text}>{catergory ? catergory : props.placeholder}</Text>
                <MaterialCommunityIcons name = {modalVisible ? 'chevron-up' : 'chevron-down'} size = {20} />
            </View>
        </TouchableWithoutFeedback>
        {<Modal visible = {modalVisible} animationType='slide'>
            <PickerItem style = {{backgroundColor: colors.primary}} label = 'Close' onPress = {()=>setModalVisible(false)}/>
            <FlatList
                data = {props.data}
                keyExtractor = {(item)=>item.id}
                renderItem = {({item})=><PickerItem style = {{backgroundColor: colors.secondary}} label = {item.label} onPress = {()=>{setCatergory(item.label); setModalVisible(false);}} />}
            />
        </Modal>}
        </>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor : colors.light,
        marginHorizontal: 15,
        borderColor: 'black',
        // borderWidth: 0.25,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,


    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        flex: 1,
    },
})