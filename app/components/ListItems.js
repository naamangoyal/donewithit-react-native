import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

export default function ListItems(props) {
    return (
        <>
            <View style={styles.profileDetail} >
                <View style={styles.profileIconBox}>
                    <Image style={styles.profileIcon} source={ props.image || require('../assets/naman.png')} />
                </View>
                <View style={styles.profileDetailsBox}>
                    <Text style={styles.title}>{props.title || 'Naman Goyal'}</Text>
                    <Text style={styles.subTitle}>{props.subTitle || '10 listing'}</Text>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
        // profile details 
        profileDetail:{
            marginTop : 30,
            flexDirection: 'row',
            paddingHorizontal: 20
        },
        profileIconBox:{
            height: 75,
            width: 75,
        },
        profileIcon:{
            height: '100%',
            width: '100%',
            borderRadius : 50
        },
        profileDetailsBox:{
            paddingLeft: 20,
            justifyContent: 'center',
        },
        
})
