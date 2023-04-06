import {View, Text, Alert} from 'react-native';
import React from 'react';
import styles from './Profilestyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = () => {
  const navigation = useNavigation();
  const LogOutUser = async () => {
    try {
      Alert.alert('Logout', 'Are you sure?', [
        {
          text: 'Yes',
          onPress: async () => {
            AsyncStorage.clear();
            navigation.dispatch(StackActions.replace('Login'));
          },
        },
        {
          text: 'No',
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => LogOutUser()}>
        <Text style={styles.logoutBtnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
