import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItems from '../components/ListItems';

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
        <FlatList
            data = {messages}
            keyExtractor = {(message)=>message.id.toString()}
            renderItem = {(item)=><ListItems title = {item.title} subTitle = {item.subTitle} image = {item.image}/>}    
        />
    </>
  )
}
const styles = StyleSheet.create({
    
})
