import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {color} from '../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopSearchbar: {
    height: '10%',
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopSearchField: {
    backgroundColor: color.halfwhite,
    width: '90%',
    alignSelf: 'center',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  TopSearchInput: {
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: '3%',
  },
  SearchIcon: {
    height: 22,
    width: 22,
  },
  TypesDiv: {
    backgroundColor: color.white,
  },
  HomeUserIcon: {
    height: 30,
    width: 30,
  },
  Toptitle: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '500',
    color: 'black',
  },
  TitleDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    alignItems: 'center',
  },
  MenuTypes: {
    backgroundColor: color.white,
    paddingVertical:'5%',
    marginHorizontal:'5%'
    
  },
  ItemsListIcon: {
    height: 30,
    width: 30,
    tintColor:'black',
marginRight:10,


  },
  ListItemCards: {
    flexDirection: 'row',
    backgroundColor:color.halfwhite,
    paddingHorizontal:10,
    paddingVertical:8,
    alignItems:'center',
    marginRight:responsiveWidth(7)

},
ListItemCardsText:{
    color:color.black,
    fontSize:responsiveFontSize(1.8),
    color:color.black
},
skip_TrackBtn:{
    height:25,
    width:25
},
SkipButtonDiv:{
    height:'8%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:'5%'
},
SkipButonDivText:{
    color:color.black,
    fontSize:responsiveFontSize(2.1),
    fontWeight:'500'
}
});

export default styles;
