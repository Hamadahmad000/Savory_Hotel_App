import { StyleSheet } from "react-native";
import { color } from "../../styles/Colors";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from "../../constant";
import { responsiveWidth } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    contaier:{
        flex:1,
        backgroundColor:color.white
    },
    Logo2Style:{
        height:responsiveScreenWidth(40),
        width:responsiveScreenWidth(65)
    },
    Logo2Container:{
        marginTop:responsiveHeight(7)
    },
    section2:{
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:20
    },
    Sec2Text:{
        // alignSelf:"center",
        // width:'68%',
        // textAlign:"center",
        
    },
    BottomText:{
        fontSize:responsiveFontSize(2.3),
        alignSelf:"center",
        color:color.black,
        marginTop:responsiveHeight(0),
        paddingBottom:responsiveHeight(1)
    },
    BottomTextInner:{
    marginTop:responsiveHeight(6),
  
    },
    // 
    wrapper: {
  
     
    },
  slide1: {
  
    justifyContent: 'center',
    alignItems: 'center',
 
    
   
  },
  slide2: {

    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {
  
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'},


})

export default styles