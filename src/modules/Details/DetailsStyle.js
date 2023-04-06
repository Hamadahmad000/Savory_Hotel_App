import { StyleSheet } from 'react-native'
import { color } from '../../styles/Colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'


const styles = StyleSheet.create({
    Container:{
        flex:1,
    },
    TopDiv:{
        flex:1
    },BottomDiv:{
        flex:1,
        backgroundColor:color.white,
        paddingBottom:'15%'
    },
    Img:{
        height:"100%",
        width:'100%'
    },
    Backbtn:{
        height:25,
        width:25
    },
    TopBackBtnContainer:{
        paddingHorizontal:'3%',
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        left:0,
        right:0,
        marginTop:'3%'
    },
    HeartIcon:{
        height:25,
        width:25,
       
    },
    CreditDiv:{
       
        backgroundColor:color.white,
        width:'100%',
        flexDirection:'row',
        paddingVertical:'3%',
        paddingHorizontal:'4%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    ChefHamad:{
      height:40,
      width:40,
      borderRadius:5
    },
    TopDownDiv1:{
      marginHorizontal:'4%'
    },
    TopDownDivTxt1:{
      fontWeight:'500',
      color:color.black
    },
    TopDownDivTxt2:{

    },
    ChefButton:{
        backgroundColor:'#FAF5EB',
        paddingHorizontal:'3%',
        paddingVertical:'2%'
    },
    ChefButtonText:{
        color:color.black
    },
    FootTitle:{
        paddingHorizontal:'5%',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:responsiveFontSize(2.5),
        color:color.black,
        marginVertical:'3%',
        letterSpacing:1.7
    },
    Line:{
      
        backgroundColor:color.Dark,
        width:'85%',
        alignSelf:'center',
        height:.3

    },
    DetailsContainer:{
    flexDirection:'row',
    paddingHorizontal:'5%',
    justifyContent:'space-between',
    marginVertical:'3%'
    },
    DetailsInnerDiv:{
        alignItems:'center'
    },
    DetailsImg:{
    height:30,
    width:30,
    marginBottom:5
    },DetailsImgText:{
        color:color.black
    },
    Dicription:{
        paddingHorizontal:'5%',
        marginVertical:'7%',
        fontSize:responsiveFontSize(2),
        color:color.black
    },
    ShopThisRecipeDiv:{
        flexDirection:'row',
        paddingHorizontal:'5%',
        justifyContent:'center'
    },
  
    PriceDiv:{
    paddingRight:'5%'
    },
    PriceTitle:{
color:color.black
    },
    Price:{
        fontWeight:'bold',
        fontSize:responsiveFontSize(2),
        color:color.black
    },
    ShopRecipeBtn:{
        flexDirection:'row',
        backgroundColor:color.mariner,
        width:'75%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        
    },
    ShopBtnIcon:{
        height:30,
        width:30,
        tintColor:color.black
    },
    ShopBtnIconText:{
        color:color.white,
        fontSize:responsiveFontSize(1.8)
    }

})


export default styles