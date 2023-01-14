import { View, Text } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function Icon({name , backgroundColor = '#000', iconColor = '#fff', size= 40}) {
  return (
    <View style = {{backgroundColor, width : size , height : size , borderRadius: size/2, position : 'relative'}}>
      <MaterialCommunityIcons name = {name} size = {size*0.5} color = {iconColor} style = {{position: 'relative', left: size*0.25, top : size*0.25}}/>
    </View>
  )
}