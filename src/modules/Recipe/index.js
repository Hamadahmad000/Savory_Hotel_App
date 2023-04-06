import {View, Text, SafeAreaView, TextInput, Image} from 'react-native';
import React,{useEffect,useState} from 'react';
import styles from './style';

import { FlatList } from 'react-native-gesture-handler';
import RecipeItems from '../../Config/RecipeApi/RecipeItems';
import RecipeCards from '../../components/RecipeList/RecipeCards';
import RecipeList from '../../Config/RecipeApi/RecipeList';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Recipe = () => {
    const [UserName, setUserName] = useState('User')
    useEffect(() => {
     getuserDetails()
    }, [])

   const getuserDetails = async()=>{
    try {
        const res = await AsyncStorage.getItem('USER')
        const userData = JSON.parse(res)
        setUserName(userData.NAME)
     
       } catch (error) {
        console.log(error);
       }
    }
  
    
    
  return (
 
      <View style={styles.container}>
      <View style={styles.TopSearchbar}>
        <View style={styles.TopSearchField}>
          <Image
            source={require('../../assets/icons/loupe.png')}
            style={styles.SearchIcon}
          />
          <TextInput
            placeholder="Type a Restaurant name"
            style={styles.TopSearchInput}
          />
        </View>
      </View>
      <View style={styles.TypesDiv}>
        <View style={styles.TitleDiv}>
          <View>
            <Text style={styles.Toptitle}>Hi {UserName},</Text>
            <Text>2422 recipe base on your references</Text>
          </View>
          <Image
            source={require('../../assets/icons/Home-User.png')}
            style={styles.HomeUserIcon}
          />
        </View>
        <View style={styles.MenuTypes}>
         <FlatList 
         data={RecipeItems}
         horizontal
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>{
         return(  <View style={styles.ListItemCards}>
            <Image source={item.icon} style={styles.ItemsListIcon}/>
            <Text style={styles.ListItemCardsText}>{item.name}</Text>
        
           
           </View>)
         }}
         />
        </View>
      </View>
        <View style={styles.SkipButtonDiv}>
     
            <Text style={styles.SkipButonDivText}>Best Matches for You</Text>
            <Image source={require('../../assets/icons/skip-track.png')} style={styles.skip_TrackBtn}/>
        </View>
        <View style={{flex:1,marginBottom:'20%'}}>
            <FlatList data={RecipeList} renderItem={({item,index})=>{
                return(
                    <RecipeCards Title={item.Title} advantages={item.asvantages} icon={item.icon} image={item.Image} price={item.prize} item={item}/>
                )
            }}/>
        </View>
       
    </View>
 
  );
};

export default Recipe;
