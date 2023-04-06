import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { color } from '../../styles/Colors'

const styles = StyleSheet.create({
    Container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,

    },
    NoOrder:{
        fontWeight:'400',
        fontSize:responsiveFontSize(3),
        color:color.black
    }
})

export default styles