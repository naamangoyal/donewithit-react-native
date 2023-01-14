import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import ListItems from '../components/ListItems';

export default function ListingDetailScreen(props) {
  return (
    <View style = {styles.container}>
        <View style= {styles.section1}>
            <Image style = {styles.image} source = {props.image}/>
            <View style = {styles.textContainer} >
                <Text style = {styles.title}>{props.title || 'Title'}</Text>
                <Text style = {styles.subTitle}>{props.subTitle || 'Sub-title'}</Text>
            </View>
            
            <ListItems
                title = {props.title}
                subTitle = {props.subTitle}
                image = {props.profileImage}
            />
        </View>
        
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop : StatusBar.currentHeight,

        height: '100%',
        width: '100%'
    },
    section1: {
        width: '100%',
        paddingVertical : 10,
    },
    image: {
        height : 200,
        width : '100%'
    },
    textContainer :{
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title :{
        fontSize: 18,
        fontWeight: '500',
    },
    subTitle :{
        fontSize: 18,
    },
    // container: {},
    // container: {},


    
})
