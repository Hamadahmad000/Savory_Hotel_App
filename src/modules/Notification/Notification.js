import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './NotificationStyle';
import SimpleButton from '../../components/simpleButton/SimpleButton';
import {color} from '../../styles/Colors';
import {StackActions, useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
const Notification = () => {
  const navigation = useNavigation();
  const askForPermission = () => {
  
    request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS).then(result => {
      navigation.dispatch(StackActions.replace('Home'))
    });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.TopDiv}>
        <Image
          source={require('../../assets/icons/notification-icon.png')}
          style={styles.NotificationIcon}
          resizeMode="contain"
        />
        <Text style={styles.IconBottomText}>
          “Savory” would like to send you notifications
        </Text>
        <Text style={styles.IconBottomDesciption}>
          Notifications might include updates about meal times, status of your
          orders and tips These can be configured in Settings.
        </Text>
      </View>
      <View style={styles.BottomDiv}>
        <SimpleButton
          bgColor={color.mariner}
          TextColor={color.white}
          title={'Allow push notification'}
          onpress={() => {
            askForPermission()
          }}
        />
        <Text
          style={styles.CancelSignupButton}
          onPress={() => {
            navigation.dispatch(StackActions.replace('Home'));
          }}>
          Skip
        </Text>
      </View>
    </View>
  );
};

export default Notification;
