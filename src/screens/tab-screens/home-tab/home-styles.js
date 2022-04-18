import {StyleSheet} from 'react-native';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';

export const Home_Styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    paddingTop:mvs(5),
  },
  header:{ flexDirection: 'row-reverse', },
  contain_container:{
    flexGrow:1,
    paddingHorizontal: mvs(5),
    paddingBottom:mvs(50),
  },
  dropdown_container:{
    width: '35%' 
  },
  dropdown_view:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingHorizontal:mvs(5) }
});
