import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'


import GoOn from '../modules/GoOn'
import Signup from '../modules/JoinUs/Signup'
import EnableLocation from '../modules/Location/EnableLocation'
import Notification from '../modules/Notification/Notification'
import Login from '../modules/Login/Login'
import Home from '../modules/Home/Home'
import Splash from '../modules/splash/Splash'
import Details from '../modules/Details/Details'

const Stack = () => {
    const Stack = createStackNavigator()
    const CustomHeader = {
        headerShown:false
    }
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} options={CustomHeader}/>
      <Stack.Screen name='Home' component={Home} options={CustomHeader}/>
      <Stack.Screen name='GoOn' component={GoOn} options={CustomHeader}/>
      <Stack.Screen name='Signup' component={Signup} options={CustomHeader}/>
      <Stack.Screen name='Login' component={Login} options={CustomHeader}/>
      <Stack.Screen name='Location' component={EnableLocation} options={CustomHeader}/>
      <Stack.Screen name='Notification' component={Notification} options={CustomHeader}/>
      <Stack.Screen name='Details' component={Details} options={CustomHeader}/>
      
    </Stack.Navigator>
  )
}

export default Stack

