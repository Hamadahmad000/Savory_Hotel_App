import { StyleSheet} from 'react-native'
import { responsiveFontSize,responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions'
import { color } from '../../styles/Colors'

const styles = StyleSheet.create({
      container:{
        flex:1,
      },
      BottomNavContainer:{
        flexDirection:'row',
        backgroundColor:color.white,
        height:'10%',
        position:'absolute',
        bottom:0,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'
      },
      iconContaienr:{
        
      },
      icons:{
            height:responsiveWidth(7),
            width:responsiveWidth(7),
            alignSelf:'center',
            tintColor:color.black
      },
      CenterIconContainer:{
        height:responsiveWidth(9),
        width:responsiveWidth(9),
        backgroundColor:color.mariner,
        alignItems:'center',
        justifyContent:'center'
      },
      CenterIconText:{
        fontSize:responsiveFontSize(3),
        color:color.white,
        fontWeight:'300'
      }
})

export default styles