import {
  useTheme
} from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Buttons from '../../../components/atoms/Button';
import DropDown from '../../../components/dropdown-picker/dropdown-picker';
import { HomeCard } from '../../../components/molecules/home-card/home-card';
import { SearchBar } from '../../../components/molecules/search-bar/Search-bar';
import Regular from '../../../presentation/typography/regular-text';
import { mvs } from '../../../services/metrices';
import { ACTIONS } from './../../../store/actions';
import { Home_Styles as styles } from './home-styles';
import Bold from './../../../presentation/typography/bold-text';
import moment from 'moment';
import Pinch from '../../../components/molecules/pinch-gesture';


const Home = (props) => {
  const { colors } = useTheme();
  const [counter, setCounter] = React.useState(0);
  const [leftValue, setLeftValue] = React.useState('work');
  const [selectedValue, setSelectedValue] = React.useState(0);// 0 for today, 1 for current month, 2 for current year
  const [enable, setEnable] = useState(true);

  const [leftItems, setLeftItems] = React.useState([
    { label: 'Work', value: 'work' },
    { label: 'Irfan', value: 'irfan' }
  ]);
  const ref = useRef();
  const scrollref = useRef();
  const [rightValue, setRightValue] = React.useState('social');
  const [rightItems, setRightItems] = React.useState([
    { label: 'Social', value: 'social' },
    { label: 'Isb', value: 'isb' }
  ]);

  const [taskList, setTaskList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  //get today list after merging two data sets in actions file
  const getTodayList = () => {
    const result = ACTIONS.fetchTodayTasks();
    setTaskList(result);
  }
  React.useEffect(() => {
    if (counter === 0) {
      getTodayList();
    } else if (counter === 1) {
      const result = ACTIONS.fetchCurrentMonthTasks();
      setTaskList(result);
    } else {
      const result = ACTIONS.fetchCurrentYearTasks();
      setTaskList(result);
    }
  }, [counter])
  const handleChange = () => {
    if (selectedValue === 2) {
      setSelectedValue(0)
    } else {
      setSelectedValue(selectedValue + 1);
    }
  }
  const renderHomeCard = ({ item, index }) => <HomeCard item={item} index={index} />
  const onScroll = ({nativeEvent}) => {
    if (nativeEvent.contentOffset.y <= 0 && enable) {
      setEnable(true);
    }
    if (nativeEvent.contentOffset.y > 0 && enable) {
      setEnable(true);
    }
  };
  return (
    <Pinch
      // enabled={enable}
      // ref={ref}
      count={counter}
      setCount={setCounter}>
      <View style={{ ...styles.conntainer, backgroundColor: colors.background }}>
        <SearchBar onChangeText={setSearchTerm} value={searchTerm} />
        <View style={styles.dropdown_view}>
          <View style={styles.dropdown_container}>
            <DropDown
              value={leftValue}
              items={leftItems}
              setValue={setLeftValue}
              setItems={setLeftItems} />
          </View>
          <TouchableOpacity onPress={handleChange}>
            <Bold style={{ fontSize: mvs(18) }} label={selectedValue === 0 ? 'Today' : selectedValue === 1 ? `${moment().format('MMM YYYY')}` : `${moment().format('YYYY')}`} />
          </TouchableOpacity>
          <View style={styles.dropdown_container}>
            <DropDown
              value={rightValue}
              items={rightItems}
              setValue={setRightValue}
              setItems={setRightItems} />
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            // onScroll={onScroll}
            // ref={scrollref}
            scrollEventThrottle={40}
            waitFor={enable ? ref : scrollref}
            initialNumToRender={10}
            data={taskList}
            contentContainerStyle={styles.contain_container}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderHomeCard}
          />
        </View>
        <Buttons.ButtonPlus onClick={() => { }} />
      </View>
    </Pinch>
  );
};

const mapStateToProps = (store) => ({

});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
