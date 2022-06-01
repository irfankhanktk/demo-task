import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import {styles} from './style.js';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import {
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {event} from 'react-native-reanimated';

const Profile = props => {
  //   const [work, setWork] = useState([
  //     {
  //       started_at: '2022-05-31 08:00:00',
  //       ended_at: '2022-05-31 08:40:00',
  //       title: 'Meeting with investor',
  //     },
  //     {},
  //     {},
  //     {},
  //   ]);
  //   const [time, setTime] = useState([{}, {}, {}, {}]);
  //   const [social, setSocial] = useState([{}, {}, {}, {}]);
  //   useEffect(() => {
  //     return () => {
  //       console.log('width', Dimensions.get('window').width / 20);
  //       let num = 0;
  //       let time = moment(work[0].started_at).format('HH:mm');
  //       let arr = [...work];
  //       arr.forEach(item => {
  //         if (time < 5) {
  //           item['time'] = moment(time).add(1, 'hours');
  //           num = num + 1;
  //         }
  //       });
  //       console.log({arr});

  //       setWork(arr);
  //     };
  //   }, []);
  const [scale, setScale] = useState(1);
  const [count, setCount] = useState(0);
  const onHandlerStateChange = event => {
    // console.log({event});
    // setScale(new Animated.Value(event.nativeEvent.scale));
    // console.log(event.nativeEvent);
  };
  const onGestureEvent = event => {
    [
      {
        nativeEvent: {
          scale: scale,
        },
      },
    ],
      {
        useNativeDriver: true,
      };
  };

  return (
    <View style={styles.container}>
      {/* <View>
        <FlatList
          data={work}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          contentContainerStyle={{
            backgroundColor: 'red',
            width: Dimensions.get('window').width / 2.1,
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{height: 150, alignItems: 'center'}}
                disabled={item.title !== undefined ? true : false}
                onPress={() => {
                  alert(index);
                }}>
                {item.title !== undefined ? (
                  <TouchableOpacity
                    style={{
                      width: Dimensions.get('window').width / 3,
                      backgroundColor: 'green',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      height: 100,
                    }}>
                    <Text style={styles.lables}>{item.title}</Text>
        
                    <Text style={styles.lables}>{`${moment(
                      item?.started_at,
                    ).format('HH:mm')} - ${moment(item?.ended_at).format(
                      'HH:mm',
                    )}`}</Text>
                  </TouchableOpacity>
                ) : null}
                <Text style={styles.time}>{item.time}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <FlatList
          data={time}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          contentContainerStyle={{
            backgroundColor: 'blue',
            width: Dimensions.get('window').width / 20,
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={{height: 150}}>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <FlatList
          data={social}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          contentContainerStyle={{
            backgroundColor: 'red',
            width: Dimensions.get('window').width / 2.1,
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{height: 150}}
                onPress={() => {
                  alert(index);
                }}>
              </TouchableOpacity>
            );
          }}
        />
      </View> */}
      {/* <PinchGestureHandler
        ref={pinchRef}
        onGestureEvent={event => {
          _onPinchGestureEvent();
        }}
        // onPinchStateChange={event => {
        //   _onPinchHandlerStateChange();
        // }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'green',
            alignSelf: 'center',
          }}
        />
      </PinchGestureHandler> */}
      <PinchGestureHandler
        onGestureEvent={onGestureEvent}
        onEnded={event => {
          if (event.nativeEvent.scale < 1) {
            if (count > 0) {
              setCount(count - 1);
              console.log(count - 1, 'zoomin');
            }
          } else {
            if (count < 3) {
              setCount(count + 1);
              console.log(count + 1, 'zoomout');
            }
          }
        }}
        // onHandlerStateChange={onHandlerStateChange}
      >
        <View
          style={[
            styles.pinchableImage,
            {
              //   transform: [{perspective: 200}, {scale: scale}],
            },
          ]}
        />
      </PinchGestureHandler>
    </View>
  );
};
export default Profile;
