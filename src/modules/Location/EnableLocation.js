import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './EnableLocStyle';

import { color } from '../../styles/Colors';
import SimpleButton from '../../components/simpleButton/SimpleButton';
import { StackActions, useNavigation } from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';



const EnableLocation = () => {
  const navigation = useNavigation()
  const AskforPermission = (p)=>{
    request(p).then((result) => {
       navigation.dispatch(StackActions.replace('Notification'))
    });
  }
  return (
    <View style={styles.Container}>
      <View style={styles.TopDiv}>
      
        <Text style={styles.IconBottomText}>Enjoy Best Restaurants
Near Your Location</Text>
        <Text style={styles.IconBottomDesciption}>
        Help us display your local delivery options by
granting location permissions
        </Text>
      </View>
      <View style={styles.BottomDiv}>
        <SimpleButton bgColor={color.mariner} TextColor={color.white} title={'Enable Location'} onpress={()=>{
          AskforPermission(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }} />
        <Text style={styles.CancelSignupButton} onPress={()=>{
        navigation.navigate('Notification')
      }}>Not Now</Text>
      </View>
    </View>
  );
};

export default EnableLocation;
