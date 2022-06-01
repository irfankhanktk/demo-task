import {StyleSheet} from 'react-native';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';

export const Styles = StyleSheet.create({
  conntainer: {
    // marginVertical:mvs(10)
    backgroundColor:'blue'
  },
  body: {
    flex: 1,
  },
  card:{
    // minHeight:mvs(100),
    borderRadius:mvs(15),
    padding:mvs(10)
  },
  title:{ alignSelf: 'center',position:'absolute',fontSize:mvs(11),color:colors.blue },
  div:{
  alignSelf:'center',
  width: mvs(8),
  alignItems:'center',
  backgroundColor:colors.border,
   height: '100%',
   borderColor:colors.border,
  },
  sub_container:{
    paddingHorizontal: mvs(1),
    // flex:1,
    // minHeight:mvs(120),

  },
  INNER_LINE:{height:mvs(10),marginTop:mvs(30),borderRadius:mvs(5),borderWidth:1,borderColor:colors.white}

});
