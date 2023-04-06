import {StyleSheet} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { color } from '../../styles/Colors'

const styles = StyleSheet.create({
    Container:{
        flex:1,
       
    },
    TopDiv:{
        flex:2,
        justifyContent:'center'
    },
    BottomDiv:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:'10%'
       
    },
    NotificationIcon:{
        height:responsiveWidth(30),
        width:responsiveWidth(30),
        alignSelf:'center'
    },
    IconBottomText:{
        fontSize:responsiveFontSize(2),
        color:color.black,
        fontWeight:'500',
        alignSelf:'center',
        width:'50%',
        textAlign:'center',
        marginVertical:responsiveHeight(2)
    },
    IconBottomDesciption:{
        fontSize:responsiveFontSize(1.7),
      
        alignSelf:'center',
        width:'70%',
        textAlign:'center',
        marginBottom:responsiveHeight(1)
    },
    CancelSignupButton:{
        alignSelf:'center',
        marginVertical:'2%',
        fontWeight:'bold',
        fontSize:responsiveFontSize(1.8),
        color:color.black
    }

})

export default styles