import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListItems from '../components/ListItems';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

export default function MessagesScreen() {
    const messages = [
        {
            id: 1,
            title : 't1',
            subTitle : 's1',
            image : require('../assets/naman.png'),
        },
        {
            id: 2,
            title : 't2',
            subTitle : 's2',
            image : require('../assets/mosh.jpg'),
        },
    ];
  return (
    <>
        <Screen>
            <FlatList
                data = {messages}
                keyExtractor = {(message)=>message.id.toString()}
                renderItem = {(item)=><ListItems 
                    title = {item.title} 
                    subTitle = {item.subTitle} 
                    image = {item.image} 
                    onPress = {()=>console.log("Message item clicked : ", item)}/>}
                    renderRightActions = {()=> {return (<><View style = {{ width: 70, height: '100%',backgroundColor:'#056ffa',}}>hello</View>{console.log('this')}</>)}}
                ItemSeparatorComponent = {<ListItemSeperator/>}
            />
        </Screen>
    </>
  )
}
const styles = StyleSheet.create({
    
})
