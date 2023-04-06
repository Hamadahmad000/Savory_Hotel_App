import {StyleSheet} from 'react-native'
import { responsiveFontSize,responsiveHeight,responsiveScreenWidth } from '../../constant'
const styles = StyleSheet.create({
    Button:{
width:'85%',
height:'20.4%',
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
paddingHorizontal:responsiveScreenWidth(5),
alignSelf:'center',
marginVertical:responsiveHeight(1)
    },
    BtnIcon:{
        height:responsiveScreenWidth(5),
        width:responsiveScreenWidth(5),
    },
    btnText:{
        fontSize:responsiveFontSize(2)
    }
})

export default styles