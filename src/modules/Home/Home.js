import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Recipe from '../Recipe';
import Profile from '../profile/Profile';
import Menu from '../Menu/Menu';
import Order from '../Orders/Order';

const Home = () => {
    const [isSelected, setisSelected] = useState('0')
  return (
    <View style={styles.container}>
        {
            isSelected == '0' ? <Recipe/> :  isSelected == '1' ? <Menu/> :  isSelected == '2' ? <Recipe/> :  isSelected == '3' ? <Order/> : <Profile/>
        }
      <View style={styles.BottomNavContainer}>
        <TouchableOpacity style={styles.iconContaienr} onPress={()=>setisSelected('0')}>
          <Image
            source={require('../../assets/icons/Recipes-selected.png')}
            resizeMode='contain'
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContaienr} onPress={()=>setisSelected('1')}>
          <Image
            source={require('../../assets/icons/Restaurants.png')}
            resizeMode='contain'
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContaienr}>
         <View style={styles.CenterIconContainer}>
            <Text style={styles.CenterIconText}>+</Text>
         </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContaienr} onPress={()=>{
          setisSelected(3)
        }}>
          <Image
            source={require('../../assets/icons/Shopping-bag.png')}
            resizeMode='contain'
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContaienr} onPress={()=>{
          setisSelected('4')
        }}>
          <Image
            source={require('../../assets/icons/NavUser.png')}
            resizeMode='contain'
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
