import {StyleSheet} from 'react-native'
import { color } from '../../styles/Colors'
import { responsiveScreenWidth } from '../../constant'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.white,
        justifyContent:'center',
        alignItems:'flex-start',
        
    },
    logo:{
        height:responsiveScreenWidth(40),
        width:responsiveScreenWidth(70)
    }
})
export default styles