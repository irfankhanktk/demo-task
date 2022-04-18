import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import {connect} from 'react-redux';
import {splash} from '../../assets';
import {mvs} from '../../services/metrices';
import {ACTIONS} from '../../store/actions';
import {Splash_Styles as styles} from './splash-styles';
import Buttons from '../../components/atoms/Button';
import Regular from '../../presentation/typography/regular-text';
const Splash = props => {
  const {setUserInfo, navigation} = props;
  const {colors} = useTheme();

  React.useEffect(() => {
    (async () => {
      // const token = await AsyncStorage.getItem('@token');

      setTimeout(() => {
          navigation.replace('Tab');
      }, 2000);
    })();
  }, []);

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
        <Regular label={'Welcom to DemoTask'}/>
    </View>
  );
};

const mapStateToProps = store => ({
  home_posts: store.state.home_posts,
  user_info: store.state.user_info,
});

const mapDispatchToProps = {
  setUserInfo: payload => ACTIONS.setUserInfo(payload),
  setSocket: payload => ACTIONS.setSocket(payload),
};
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
