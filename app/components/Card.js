import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
export default function Card(props) {
    return (
        <>
        <View style = {styles.shadowContainer}>
            <View style={styles.cardContainer}>
                <Image style={styles.cardImage} source={require('../assets/jacket.jpg')} />
                <View style = {styles.textContainer}>
                    <Text style = {styles.title}>{props.title || 'Title'}</Text>
                    <Text style = {styles.subTitle}>{props.subTitle || 'Sub-title'} </Text>
                </View>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    shadowContainer:{
        marginVertical: 10,
        borderRadius: 15,

        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 10,
        shadowColor: '#52006A',
        width: '100%',
        height: 300,
        // backgroundColor: '#000',

    },
    cardContainer: {
        borderRadius: 15,
        width : '100%',
        height: '100%',
        // shadowColor: "#000",
        
        // backgroundColor: '#000',
        overflow: 'hidden',

    },
    cardImage: {
        height: 200,
        width: '100%',
    },
    textContainer:{
        paddingHorizontal: 20,
        paddingTop : 20,
        height: 100,
        backgroundColor: 'white'

    },
    title:{
        fontSize: 18,
        // color : '#fff',
        fontWeight: '500',
    },
    subTitle:{
        fontSize: 16,
        // color : "white"

    },
})
