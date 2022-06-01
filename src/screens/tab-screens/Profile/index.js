import React, {useRef, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {PinchGestureHandler, ScrollView} from 'react-native-gesture-handler';
import {styles} from './style.js';

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
  const [enable, setEnable] = useState(true);
  const ref = useRef();
  const scrollref = useRef();
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
  const _onScroll = ({nativeEvent}) => {
    if (nativeEvent.contentOffset.y <= 0 && enable) {
      setEnable(true);
    }
    if (nativeEvent.contentOffset.y > 0 && enable) {
      setEnable(true);
    }
  };
  return (
    <PinchGestureHandler
      enabled={enable}
      ref={ref}
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
      <ScrollView
        ref={scrollref}
        waitFor={enable ? ref : scrollref}
        onScroll={_onScroll}
        scrollEventThrottle={40}>
        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.pinchableImage,
              {
                height:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
                width:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
              },
            ]}
          />
          <TouchableOpacity
            style={[
              styles.pinchableImage,
              {
                height:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
                width:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
              },
            ]}
          />
          <TouchableOpacity
            style={[
              styles.pinchableImage,
              {
                height:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
                width:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
              },
            ]}
          />
          <TouchableOpacity
            style={[
              styles.pinchableImage,
              {
                height:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
                width:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
              },
            ]}
          />
          <TouchableOpacity
            style={[
              styles.pinchableImage,
              {
                height:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
                width:
                  count == 0 ? 200 : count == 1 ? 250 : count == 2 ? 300 : 350,
              },
            ]}
          />
        </View>
      </ScrollView>
    </PinchGestureHandler>
  );
};
export default Profile;
