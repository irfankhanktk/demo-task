import moment from 'moment';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Bold from '../../../presentation/typography/bold-text';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import { Styles as styles } from './home-card-styles';
import Medium from './../../../presentation/typography/medium-text';
import { mvs } from '../../../services/metrices';

export const HomeCard = ({ item, index }) => {
  const title = Object.keys(item || {})[0];
  const tasks = Object.values(item || {})[0];

  return (
    <View style={{ height: mvs(150) }}>
      <Regular style={styles.title} label={title} />
      <View style={styles.conntainer}>
        {tasks?.map((ele, ind) => {
          const bool = ele?.type === 'social';
          const textStyle = { color: bool ? colors.text : colors.white }
          return (
            <View key={ind} style={{ position: 'absolute', width: '100%' }}>
              <View style={{ position: 'absolute', top: ele?.top, alignSelf: bool ? 'flex-end' : 'flex-start', zIndex: (ind), ...styles.sub_container }}>
                <View style={{ backgroundColor: bool ? colors?.secondary : colors.primary, borderWidth: 1, ...styles.card }}>
                  <Bold style={textStyle} label={ele?.title} />
                  <Medium style={textStyle} label={`${moment(ele?.started_at).format('DD/MM/YYYY')}`} />
                  <Regular style={textStyle} label={`${moment(ele?.started_at).format('HH:mm')} - ${moment(ele?.ended_at).format('HH:mm')}`} />
                </View>
              </View>
              <TouchableOpacity onPress={() => { }} style={{ position: 'absolute', top: ele?.top, alignSelf: !bool ? 'flex-end' : 'flex-start', zIndex: (ind), backgroundColor: 'red', height: 20, width: '50%' }}>
                {/* <View style={{backgroundColor:bool?colors?.secondary:colors.primary,borderWidth:1,...styles.card}}>
              <Bold style={textStyle} label={ele?.title} />
              <Medium style={textStyle} label={`${moment(ele?.started_at).format('DD/MM/YYYY')}`} />
              <Regular style={textStyle} label={`${moment(ele?.started_at).format('HH:mm')} - ${moment(ele?.ended_at).format('HH:mm')}`} />
            </View> */}
              </TouchableOpacity>
            </View>
          )
        })}
        <View style={styles.div} />
      </View>
    </View>
  )
}

