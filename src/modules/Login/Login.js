import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from './LoginStyle';
import Input from '../../components/input/input';
import {StackActions, useNavigation} from '@react-navigation/native';
import CheckBox from 'react-native-check-box';
import Button from '../../components/Button/Button';
import {color} from '../../styles/Colors';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneInput from 'react-native-phone-number-input';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [isBadEmail, setisBadEmail] = useState(false);
  const [Password, setPassword] = useState('');
  const [isBadPassword, setisBadPassword] = useState(false);
 
  const [invalidUser, setinvalidUser] = useState(false);
  const navigation = useNavigation();

  const SignupUser = () => {
    if (!Email) {
      setisBadEmail(true);
    } else {
      setisBadEmail(false);
    }
    if (!Password) {
      setisBadPassword(true);
    } else {
      setisBadPassword(false);
      if (Email && Password) {
        CheckUser();
      }
    }
  };

  const CheckUser = async () => {
    try {
      const res = await AsyncStorage.getItem('USER');
      const userData = JSON.parse(res)
      if (Email == userData.EMAIL && Password == userData.PASSWORD) {
        ToastAndroid.show('Login Successfully', 2000);
        await AsyncStorage.setItem('Logedin','true')
        navigation.dispatch(StackActions.replace('Home'));
      
      }else if(userData.EMAIL == null || userData.PASSWORD == null){
        
        setinvalidUser(true);
        ToastAndroid.show('Invalid user', 1500);
      }else {
        console.log(Email,Password);
        setinvalidUser(true);
        ToastAndroid.show('Invalid user', 1500);
      }
    } catch (error) {
      setinvalidUser(true);
      console.log('working');
      console.log(error);
    }
  };

  return (
    <View style={styles.Container}>
      <ScrollView contentContainerStyle={{flex: 1}} bounces={true}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.BackArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.HeaderTitle}>Join Us</Text>
          <View></View>
        </View>
        <Text style={styles.HeaderBottomText}>
          Create an account so you can stay up to date with awesome recipes
        </Text>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {invalidUser ? (
            <Text style={styles.invalidUser}>Invalid User Details</Text>
          ) : null}
          <Input
            placeholder={'Email address'}
            value={Email}
            onchange={text => setEmail(text)}
          />
          {isBadEmail ? (
            <View style={styles.ErrorDiv}>
              <Text style={styles.errorText}>Email field is empty </Text>
              <Image
                source={require('../../assets/icons/error.png')}
                style={styles.ErrorIcon}
              />
            </View>
          ) : null}
          <Input
            placeholder={'Password (8 to 20 Characters)'}
            value={Password}
            onchange={text => setPassword(text)}
          />
          {isBadPassword ? (
            <View style={styles.ErrorDiv}>
              <Text style={styles.errorText}>Password field is empty </Text>
              <Image
                source={require('../../assets/icons/error.png')}
                style={styles.ErrorIcon}
              />
            </View>
          ) : null}

          <View style={styles.CheckBoxContainer}></View>
          <TouchableOpacity
            style={styles.JoinUsBtn}
            onPress={() => SignupUser()}>
            <Text style={styles.JoinUsBtnText}>Login</Text>
          </TouchableOpacity>
          <Text
            style={styles.GoToLogin}
            onPress={() => navigation.navigate('Signup')}>
            Don't have an account
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
