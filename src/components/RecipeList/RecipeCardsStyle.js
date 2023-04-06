import {StyleSheet} from 'react-native'
import { color } from '../../styles/Colors'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const styles = StyleSheet.create({
    Container:{
      backgroundColor:color.white,
      padding:responsiveWidth(5),
      width:'90%',
      alignSelf:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:'2%',
     
    },
    Img:{
        height:responsiveWidth(20),
        width:responsiveWidth(20),
        borderRadius:responsiveWidth(2)
    },
    Icon:{
        height:25,
        width:25
        },
    Title:{
        marginBottom:'1%',
        color:color.black,
        fontWeight:'500',
       
    },
    advantages:{
      marginLeft:10
    },
    advantagesDiv:{
        flexDirection:'row',
        marginTop:5
    },
    PriceCard:{
        padding:5,
        backgroundColor:'#FAF5EB',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:0,marginTop:'5%',
        width:'55%'
    },
    PriceText:{
        color:color.black
    }
    
})


export default styles