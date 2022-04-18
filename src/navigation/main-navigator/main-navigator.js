// In App.js in a new project

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Splash from '../../screens/splash-screen/splash';
import TabNavigator from './../tab-navigator/tab-navigator';
const Stack = createStackNavigator();
const horizontalAnimation = {
  headerShown: false,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={horizontalAnimation}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};
