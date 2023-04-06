import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from './SimpleButtonStyle'
const SimpleButton = ({icons,title,bgColor,TextColor,tintColor,onpress}) => {
  return (
    <TouchableOpacity style={[styles.Button,{backgroundColor:bgColor}]} onPress={()=>onpress ? onpress() : null}>
       
      <Text style={[styles.btnText,{color:TextColor}]}>{title}</Text>
     
    </TouchableOpacity>
  )
}

export default SimpleButton

