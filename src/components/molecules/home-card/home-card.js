import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import Bold from '../../../presentation/typography/bold-text';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import { Styles as styles } from './home-card-styles';
import Medium from './../../../presentation/typography/medium-text';

export  const HomeCard = ({ item, index }) => {
  const title = Object.keys(item || {})[0];
  const tasks = Object.values(item || {})[0];

  return (
    <View>
      <Regular style={styles.title} label={title} />
      <View style={styles.conntainer}>
        {tasks?.map((ele, ind) =>{
          const bool=ele?.type === 'social';
          const textStyle={color:bool?colors.text:colors.white}
        return (
          <View key={ind} style={{alignSelf: bool ? 'flex-end' : 'flex-start',...styles.sub_container }}>
            <View style={{backgroundColor:bool?colors?.secondary:colors.primary,...styles.card}}>
              <Bold style={textStyle} label={ele?.type} />
              <Medium style={textStyle} label={`${moment(ele?.started_at).format('DD/MM/YYYY')}`} />
              <Regular style={textStyle} label={`${moment(ele?.started_at).format('HH:mm')} - ${moment(ele?.ended_at).format('HH:mm')}`} />
            </View>
          </View>
        )})}
        <View style={styles.div} />
      </View>
    </View>
  )
}

