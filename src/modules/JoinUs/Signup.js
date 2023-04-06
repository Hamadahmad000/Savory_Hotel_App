import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from './SignupStyle';
import Input from '../../components/input/input';
import {StackActions, useNavigation} from '@react-navigation/native';
import CheckBox from 'react-native-check-box';
import Button from '../../components/Button/Button';
import {color} from '../../styles/Colors';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneInput from 'react-native-phone-number-input';

const Signup = () => {
  const [Name, setName] = useState('');
  const [isBadName, setisBadName] = useState(false);
  const [Email, setEmail] = useState('');
  const [isBadEmail, setisBadEmail] = useState(false);
  const [Password, setPassword] = useState('');
  const [isBadPassword, setisBadPassword] = useState(false);
  const [Phone, setPhone] = useState('');
  const navigation = useNavigation();
  const [isBadPhone, setIsBadPhone] = useState(false);
  const [isCHecked, setisCHecked] = useState(false);
  const [isBadChecked, setisBadChecked] = useState(false);

  const SignupUser = () => {
    if (!Name) {
      setisBadName(true);
    } else {
      setisBadName(false);
    }
    if (!Email) {
      setisBadEmail(true);
    } else {
      setisBadEmail(false);
    }
    if (!Password) {
      setisBadPassword(true);
    } else {
      setisBadPassword(false);
    }
    if (!Phone) {
      setIsBadPhone(true);
    } else {
      setIsBadPhone(false);
    }
    if (!isCHecked) {
      setisBadChecked(true);
    } else {
      setisBadChecked(false);
      if (Phone.length < 11) {
        setIsBadPhone(true);
      } else {
        setIsBadPhone(false);
        if (Name && Email && Password && Phone) {
          SaveUser();
        }
      }
    }
  };
  const SaveUser = async () => {
    try {
      const userData = {
        NAME: Name,
        EMAIL: Email,
        PASSWORD: Password,
        PHONE: Phone,
      };
      console.log(userData);
      await AsyncStorage.setItem('USER', JSON.stringify(userData));
      ToastAndroid.show('Created Successfully', 2000);
      navigation.dispatch(StackActions.replace('Location'));
    } catch (error) {
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

        <Input
          placeholder={'First and last name'}
          value={Name}
          onchange={text => setName(text)}
        />
        {isBadName ? (
          <View style={styles.ErrorDiv}>
            <Text style={styles.errorText}>Name field is empty </Text>
            <Image
              source={require('../../assets/icons/error.png')}
              style={styles.ErrorIcon}
            />
          </View>
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
        <PhoneInput
          defaultCode="PK"
          layout="first"
          withShadow
          autoFocus
          textInputStyle={{paddingVertical: 0}}
          value={Phone}
          onChangeFormattedText={text => {
            setPhone(text);
          }}
          containerStyle={{
            width: '85%',
            borderRadius: 5,
            alignSelf: 'center',
            marginTop: '2%',
          }}
        />
        {isBadPhone ? (
          <View style={styles.ErrorDiv}>
            <Text style={styles.errorText}>
              Invalid phone number / phone length must be atleast 11 character
              &nbsp;{' '}
              <Image
                source={require('../../assets/icons/error.png')}
                style={styles.ErrorIcon}
              />
            </Text>
          </View>
        ) : null}

        <View style={styles.CheckBoxContainer}>
          <CheckBox
            isChecked={isCHecked}
            onClick={() => setisCHecked(!isCHecked)}
            rightText={
              'By joining Savory you agree that you are over 18 years of age or older, will receive email updates,promotions and special offers.'
            }
            checkedCheckBoxColor={'green'}
            uncheckedCheckBoxColor={isBadChecked ? 'red' : 'black'}
          />
        </View>
        <TouchableOpacity style={styles.JoinUsBtn} onPress={() => SignupUser()}>
          <Text style={styles.JoinUsBtnText}>Join Us</Text>
        </TouchableOpacity>
        <Text style={styles.GoToLogin} onPress={()=>navigation.navigate('Login')}>Already have an account</Text>

        <View style={styles.BottomTextInner}></View>
        <Text style={styles.BottomText}>Continue With</Text>
        <Button
          TextColor={'white'}
          bgColor={color.Dark}
          title={'Instagram'}
          icons={require('../../assets/icons/instagram.png')}
        />
        <Button
          TextColor={'white'}
          bgColor={color.primaryDark}
          title={'Facebook'}
          tintColor={'white'}
          icons={require('../../assets/icons/facebook.png')}
        />
        <Button
          TextColor={'white'}
          bgColor={color.primary}
          title={'Twitter'}
          tintColor={'white'}
          icons={require('../../assets/icons/twitter.png')}
        />

        <View style={{marginBottom: responsiveHeight(1)}}></View>
      </ScrollView>
    </View>
  );
};

export default Signup;
