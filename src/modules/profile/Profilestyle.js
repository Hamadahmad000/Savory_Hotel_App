import {StyleSheet} from 'react-native'
import { color } from '../../styles/Colors'
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoutBtn:{
        backgroundColor:color.mariner,
        paddingVertical:'4%',
        paddingHorizontal:'6%',
        borderRadius:5
    },
    logoutBtnText:{
        fontSize:20,
        fontWeight:'bold',
        color:color.white
    }
})

export default styles