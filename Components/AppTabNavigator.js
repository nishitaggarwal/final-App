import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';
import HomeScreen from '../screens/HomeScreen';

export const AppTabNavigator = createBottomTabNavigator({
  ForgeComplaint: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/request-book.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Forge Complaint ',
    },
  },

  Awareness: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/request-list.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Awareness  ',
    },
  },
});
