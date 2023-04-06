import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './DetailsStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Details() {
    const [item, setitem] = useState({})
    const [showIMage, setshowIMage] = useState(false)
    const route = useRoute()
    useEffect(() => {
        const {item} = route.params
        
        setitem(item)
        setTimeout(() => {
            setshowIMage(true)
        }, 500);
    }, [])
    const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.Container}>
    <View style={styles.TopDiv}>
       {
        showIMage ?  <Image
        style={styles.Img}
        source={{uri:item.Image}}
      /> : null
       }
        <View style={styles.TopBackBtnContainer}>
        <TouchableOpacity onPress={()=>{
            navigation.goBack()
        }}>
        <Image
            source={require('../../assets/icons/back.png')}
            style={styles.Backbtn}
          />
        </TouchableOpacity>
          <Image
            source={require('../../assets/icons/love.png')}
            style={styles.HeartIcon}
          />
        </View>
      </View>
      <View style={styles.BottomDiv}>
        <View style={styles.CreditDiv}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/img/Chef-HamadMirza.jpg')}
              style={styles.ChefHamad}
              resizeMode="cover"
            />
            <View style={styles.TopDownDiv1}>
              <Text style={styles.TopDownDivTxt1}>By Hamad Mirza</Text>
              <Text style={styles.TopDownDivTxt2}>Passionate Chef</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.ChefButton}>
            <Text style={styles.ChefButtonText}>See Foods</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line}></View>
        <Text style={styles.FootTitle}>{item.Title}</Text>
        <View style={styles.DetailsContainer}>
          <View style={styles.DetailsInnerDiv}>
            <Image
              source={require('../../assets/icons/circle.png')}
              style={styles.DetailsImg}
            />
            <Text style={styles.DetailsImgText}>2 Servings</Text>
          </View>
          <View style={styles.DetailsInnerDiv}>
            <Image
              source={require('../../assets/icons/lighting.png')}
              style={styles.DetailsImg}
            />
            <Text style={styles.DetailsImgText}>Kcl</Text>
          </View>
          <View style={styles.DetailsInnerDiv}>
            <Image
              source={require('../../assets/icons/alarm-clock.png')}
              style={styles.DetailsImg}
            />
            <Text style={styles.DetailsImgText}>12 Minute</Text>
          </View>
          <View style={styles.DetailsInnerDiv}>
            <Image
              source={require('../../assets/icons/motivation.png')}
              style={styles.DetailsImg}
            />
            <Text style={styles.DetailsImgText}>Medium</Text>
          </View>
        </View>
        <Text style={styles.Dicription}>Lorem ipsum dolor sit amet, consectetuer adipiscing
elit. Senectus et netus et malesuada fames ac.</Text>
<View style={styles.ShopThisRecipeDiv}>
    <View style={styles.PriceDiv}>
        <Text style={styles.PriceTitle}>Price :</Text>
        <Text style={styles.Price}>{`$${item.prize}`}</Text>
    </View>
    <TouchableOpacity style={styles.ShopRecipeBtn}>
        <Image source={require('../../assets/icons/Shopping-bag.png')} style={styles.ShopBtnIcon} resizeMode='contain' />
        <Text style={styles.ShopBtnIconText}>Shop This Recipe</Text>
        <View></View>
    </TouchableOpacity>
</View>
      </View>
    </View>
    </ScrollView>
  );
}
