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
  const itemData = Object.values(item || {})[0];

  const [leftIndex, setLeftIndex] = React.useState(null);
  const [rightIndex, setRightIndex] = React.useState(null);

  return (
    <View onPress={() => { }} style={{ height: mvs(150), marginBottom: 0, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: mvs(150) }}>
        <TouchableOpacity activeOpacity={1} style={{ flex: 1, }}>
          {itemData?.social?.map((ele, ind) => {
            const bool = ele?.type === 'social';
            const textStyle = { color: bool ? colors.text : colors.white, };
            // const diff = moment(ele.started_at).diff(,'hours');
            return (
              <TouchableOpacity onPress={() => setLeftIndex(leftIndex == (itemData?.social?.length - 1) ? 0 : (leftIndex + 1))} style={{ zIndex: ind === leftIndex ? 1001 : null, position: 'absolute', top: ele?.top, height: mvs(ele?.height), width: mvs(140), borderWidth: 1, backgroundColor: bool ? colors?.secondary : colors.primary, ...styles.card }}>
                <Bold style={textStyle} label={ele?.title} />
                <Medium style={textStyle} label={`${moment(ele?.started_at).format('DD/MM/YYYY')}`} />
                <Regular style={textStyle} label={`${moment(ele?.started_at).format('HH:mm')} - ${moment(ele?.ended_at).format('HH:mm')}`} />
              </TouchableOpacity>
            )
          })}
        </TouchableOpacity>
        <View style={styles.div} >
          <View style={styles.INNER_LINE} />
          <View style={[styles.INNER_LINE, { marginTop: mvs(30) }]} />
          <View style={[styles.INNER_LINE, { marginTop: mvs(30) }]} />
          <View style={{ height: mvs(8), width: mvs(8), borderRadius: mvs(4), backgroundColor: colors.blue }} />
        </View>
        <TouchableOpacity  activeOpacity={1} style={{ flex: 1, alignItems: 'flex-end', }}>
          {itemData?.work?.map((ele, ind) => {
            const bool = ele?.type === 'social';
            const textStyle = { color: bool ? colors.text : colors.white };
            // const diff = moment(ele.started_at).diff(,'hours');
            return (
              <TouchableOpacity onPress={() => setRightIndex(rightIndex == (itemData?.work?.length - 1) ? 0 : (rightIndex + 1))} style={{ zIndex: ind === rightIndex ? 1001 : null, position: 'absolute', height: mvs(100), width: mvs(140), backgroundColor: bool ? colors?.secondary : colors.green, ...styles.card }}>
                <Bold style={textStyle} label={ele?.title} />
                <Medium style={textStyle} label={`${moment(ele?.started_at).format('DD/MM/YYYY')}`} />
                <Regular style={textStyle} label={`${moment(ele?.started_at).format('HH:mm')} - ${moment(ele?.ended_at).format('HH:mm')}`} />
              </TouchableOpacity>
            )
          })}
        </TouchableOpacity>
        {/* </View> */}
        {/* <View style={styles.div} >
        <View style={{ height: mvs(10), width: mvs(10), borderRadius: mvs(5), backgroundColor: 'green' }} />
      </View> */}

      </View>
      <View style={{ position: 'absolute', alignSelf: 'center', width: mvs(80), height: 25 }}>
        <Regular style={{ ...styles.title, alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }} label={title} />
      </View>

    </View>
  )
}

