import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import ListItemSeperator from '../components/ListItemSeperator'


const listing =[
    {
        id: 1,
        title : 'Red jacket for sale',
        price : 100,
        image : require('../assets/jacket.jpg')

    },
    {
        id: 2,
        title : 'Couch for sale',
        price : 1000,
        image : require('../assets/couch.jpg')

    },
    {
        id: 3,
        title : 'Couch for sale',
        price : 1000,
        image : require('../assets/couch.jpg')

    },
    {
        id: 4,
        title : 'Couch for sale',
        price : 1000,
        image : require('../assets/couch.jpg')

    },
]
export default function ListingScreen() {
  return (
    <Screen>
        <FlatList
            data = {listing}
            keyExtractor = {(item)=>item.id}
            renderItem = {({item})=><Card title = {item.title} subTitle = {`$${item.price}`} image = {item.image}/>}
        />
    </Screen>
  )
}