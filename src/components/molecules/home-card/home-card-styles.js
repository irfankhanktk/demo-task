import {StyleSheet} from 'react-native';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';

export const Styles = StyleSheet.create({
  conntainer: {
    // marginVertical:mvs(10)
  },
  body: {
    flex: 1,
  },
  card:{
    // minHeight:mvs(100),
    borderRadius:mvs(20),
    padding:mvs(15)
  },
  title:{ alignSelf: 'center' },
  div:{ borderLeftWidth: StyleSheet.hairlineWidth, height: '100%', position: 'absolute', alignSelf: 'center',borderColor:colors.border },
  sub_container:{
    paddingHorizontal: mvs(10),
    width: '50%',
    // minHeight:mvs(120),

  }

});
