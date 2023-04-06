import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './RecipeCardsStyle'
import { useNavigation } from '@react-navigation/native'

const RecipeCards = ({Title,image,icon,advantages,onpress,price,item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('Details',{item:item})
    }}>
    <View style={styles.Container}>
     <View>
        <View>
       <View style={{width:'70%'}}>
       <Text style={styles.Title}>{Title}</Text>
       </View>
        <View style={styles.advantagesDiv}>
            <Image source={icon} style={styles.Icon}/>
            <Text style={styles.advantages}>{advantages}</Text>
        </View>
        </View>
        <View style={styles.PriceCard}>
         <Text style={styles.PriceText}>{`$ ${price}`}</Text>
        </View>
     </View>
      <Image source={{uri:image}} style={styles.Img}/>
    </View>
    </TouchableOpacity>
  )
}

export default RecipeCards