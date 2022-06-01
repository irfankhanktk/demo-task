import React, { useState } from 'react';
import { View } from 'react-native';
import {
  PinchGestureHandler
} from 'react-native-gesture-handler';
import { styles } from './style.js';

const Pinch = ({
  count = 0,
  setCount = (arg) => { },
  // enable=true,
  // ref,
  children,
}) => {
  const onGestureEvent = event => {
    [
      {
        nativeEvent: {
          scale: 1,
        },
      },
    ],
    {
      useNativeDriver: true,
    };
  };

  return (
    <View style={styles.container}>
      <PinchGestureHandler
        // enabled={enable}
        // ref={ref}
        style={{ flex: 1, }}
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
      >
        {children}
      </PinchGestureHandler>
    </View>
  );
};
export default Pinch;
