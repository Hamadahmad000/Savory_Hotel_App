import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from './ButtonStyle'
const Button = ({icons,title,bgColor,TextColor,tintColor,onpress}) => {
  return (
    <TouchableOpacity style={[styles.Button,{backgroundColor:bgColor}]} onPress={()=>onpress ? onpress() : null}>
        <Image source={icons} style={[styles.BtnIcon,{tintColor:tintColor}]}/>
      <Text style={[styles.btnText,{color:TextColor}]}>{title}</Text>
      <View></View>
    </TouchableOpacity>
  )
}

export default Button

