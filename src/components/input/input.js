import { StyleSheet, Text, View,TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import styles from './inputStyle'
import { color } from '../../styles/Colors'
const Input = ({placeholder,value,onchange,keyboardtype,autofocus}) => {
 
  
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={color.Dark} keyboardType={keyboardtype?keyboardtype:'default'} onChangeText={(Text)=>onchange(Text)} value={value} autoFocus={autofocus ? autofocus : false} />
        
    </View>
  )
}

export default Input

