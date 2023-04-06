import { View, Text } from 'react-native'
import React from 'react'
import styles from './OrderStyle'

const Order = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.NoOrder}>No Orders</Text>
      
    </View>
  )
}

export default Order