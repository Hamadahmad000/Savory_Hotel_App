import {StyleSheet} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { color } from '../../styles/Colors'

const styles = StyleSheet.create({
    Container:{
      flex:1,
    },
    Header:{
        flexDirection:'row',
        marginHorizontal:responsiveWidth(3),
        
        paddingVertical:responsiveHeight(2),
        justifyContent:'space-between'
    },
    BackArrow:{
        height:responsiveWidth(5),
        width:responsiveWidth(5)
    },
    HeaderTitle:{
        textAlign:'center',
        fontWeight:'500',
        color:'black',
        fontSize:responsiveFontSize(1.9),
        marginRight:responsiveWidth(2)
    },
    HeaderBottomText:{
        width:'70%',
        alignSelf:'center',
        fontSize:responsiveFontSize(1.8),
        color:'black',
        textAlign:'center',
        marginVertical:'3%'
    },
    CheckBoxContainer:{
        
        width:'85%',
       alignSelf:'center',
       marginTop:'3%'
    },
    JoinUsBtn:{
        width:'85%',
        height:'5%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:responsiveScreenWidth(5),
        alignSelf:'center',
        marginVertical:responsiveHeight(1),
        backgroundColor:color.mariner,
        marginTop:responsiveHeight(3)
    },
    JoinUsBtnText:{
  color:color.white
    },
    BottomText:{
        fontSize:responsiveFontSize(2),
        alignSelf:"center",
        color:color.black,
        marginTop:responsiveHeight(0),
        paddingBottom:responsiveHeight(1)
    },
    BottomTextInner:{
        marginTop:'8%'
    },
    ErrorDiv:{
        flexDirection:'row',
        alignItems:'center',
        width:'85%',
        alignSelf:'center'
    },
    ErrorIcon:{
        height:responsiveWidth(4),
        width:responsiveWidth(4)
    },
    errorText:{
   color:'red',
   paddingRight:4
    },
    GoToLogin:{
        alignSelf:'center',
        marginTop:responsiveHeight(2),
        textDecorationLine:'underline',
        color:color.black
    }

})

export default styles