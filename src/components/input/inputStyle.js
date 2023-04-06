import {StyleSheet} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { color } from '../../styles/Colors'

const styles = StyleSheet.create({
    inputContainer:{
        borderWidth:0.2,
        width:'85%',
        alignSelf:'center',
         marginVertical:responsiveHeight(.8),
     paddingHorizontal:'2%',
        borderColor:color.black,
     justifyContent:'center',
     borderRadius:5,
     backgroundColor:color.white
    },
    input:{
        // flex:1,
        color:'black',
        
        paddingVertical:responsiveHeight(1),
        fontSize:responsiveFontSize(1.8),
    
    },
})

export default styles