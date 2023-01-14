import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItems from '../components/ListItems'
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';

const comp = [
    {
        title : 'My listing',
        icon: {
            name : 'format-list-bulleted',
            backgroundColor : colors.primary,
        }

    },
    {
        title : 'My Messages',
        icon: {
            name : 'email',
            backgroundColor : colors.secondary,
        }

    }
];

export default function AccountScreen() {
  return (
    <Screen style = {styles.screen}>
        <View style ={styles.container}>
            <ListItems
                title = "Naman Goyal"
                subTitle = "namanrgoyal@gmail.com"
                image = {require('../assets/naman.png')}
            />
        </View>

        <View style = {styles.container}>
            <FlatList
                data={comp}
                keyExtractor = {(item)=>item.title}
                renderItem={({item})=><><ListItems title = {item.title} IconComponent = {<Icon name = {item.icon.name} backgroundColor = {item.icon.backgroundColor}/>}/></>}
                ItemSeparatorComponent = {ListItemSeperator}
            />
        </View>
        <ListItems title = "Logout" IconComponent = {<Icon name = 'logout' backgroundColor='#ffe66d '/>}/>
    </Screen>
  )
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor : colors.light,
    },
    container: {
        marginVertical: 15
    },
})