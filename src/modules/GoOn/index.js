import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {color} from '../../styles/Colors';

import Swiper from 'react-native-swiper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';
const GoOn = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.contaier}>
      <View style={styles.Logo2Container}>
        <Image
          source={require('../../assets/icons/Logo2.png')}
          style={styles.Logo2Style}
          resizeMode="contain"
        />
      </View>
      <Swiper style={styles.wrapper} autoplay={true}>
        <View style={styles.slide1}>
          
            <View style={styles.section2}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: color.halfwhite,
                  marginHorizontal: 10,
                }}></View>
              <View>
                <Text style={{color: color.black}}>Jane Auxtin</Text>
                <Text>Copywriter</Text>
              </View>
            </View>
            <Text style={styles.Sec2Text}>
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Vestibulum tortor quam porttitor, facilisis luctus tincidunt."
            </Text>
         
        </View>
        <View style={styles.slide2}>
        <View style={styles.section2}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: color.halfwhite,
                  marginHorizontal: 10,
                }}></View>
              <View>
                <Text style={{color: color.black}}>Jane Auxtin</Text>
                <Text>Copywriter</Text>
              </View>
            </View>
            <Text style={styles.Sec2Text}>
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Vestibulum tortor quam porttitor, facilisis luctus tincidunt."
            </Text>
        </View>
        <View style={styles.slide3}>
        <View style={styles.section2}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: color.halfwhite,
                  marginHorizontal: 10,
                }}></View>
              <View>
                <Text style={{color: color.black}}>Jane Auxtin</Text>
                <Text>Copywriter</Text>
              </View>
            </View>
            <Text style={styles.Sec2Text}>
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Vestibulum tortor quam porttitor, facilisis luctus tincidunt."
            </Text>
        </View>
      </Swiper>
      <View></View>
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
      <Button
        TextColor={'white'}
        bgColor={color.mariner}
        title={'Email Address'}
        tintColor={'white'}
        icons={require('../../assets/icons/mail.png')}
        onpress={()=>{
          navigation.navigate('Signup')
        }}
      />
      <View style={{marginBottom:responsiveHeight(2)}}></View>
    </View>
  );
};

export default GoOn;
