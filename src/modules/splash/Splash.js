import { View,Image,StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import styles from './style'
import {useNavigation,StackActions} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Splash = () => {
    const navigation = useNavigation(StackActions.replace('Home'))
    useEffect(() => {
      setTimeout(async() => {
       try {
       const Logedin = await AsyncStorage.getItem('Logedin')
       const res = await AsyncStorage.getItem('USER')
       const userData = JSON.parse(res)
       if(Logedin == 'true'){
        navigation.dispatch(StackActions.replace('Home'))
      }else if(!Logedin && !userData.EMAIL){
        navigation.dispatch(StackActions.replace('GoOn'))
      }else if(userData.EMAIL){
         navigation.dispatch(StackActions.replace('Home'))
          
       }else{
        navigation.dispatch(StackActions.replace('Signup'))
      }
      
    } catch (error) {
         navigation.dispatch(StackActions.replace('GoOn'))
        console.log(error);

       }
      }, 3000);
    }, [])
    
  return (
    
    <View style={styles.container}>
        <StatusBar hidden={true}/>
      <Image source={require('../../assets/icons/Logo.png')} style={styles.logo} resizeMode='contain'/>
    </View>
  )
}

export default Splash



