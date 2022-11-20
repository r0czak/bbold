import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePanel from '../pages/HomePanel';
import BloodCardPanel from '../pages/BloodCardPage';
import MapPanel from '../pages/MapPanel';
import DiscountPanel from '../pages/DiscountPage';
import ResearchPanel from '../pages/ResearchPanel';

const Tab = createBottomTabNavigator();

const TabNavStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#c43b3d',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        headerStyle: {
          backgroundColor: '#c43b3d',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomePage') {
            iconName = 'home';
          } else if (route.name === 'BloodPage') {
            iconName = 'water';
          } else if (route.name === 'MapPage') {
            iconName = 'google-maps';
          } else if (route.name === 'DiscountsPage') {
            iconName = 'ticket-percent';
          } else if (route.name === 'ResearchPage') {
            iconName = 'heart-pulse';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="HomePage"
        component={HomePanel}
        options={{title: 'Strona główna'}}
      />
      <Tab.Screen
        name="BloodPage"
        component={BloodCardPanel}
        options={{title: 'Krew'}}
      />
      <Tab.Screen
        name="MapPage"
        component={MapPanel}
        options={{title: 'Mapa'}}
      />
      <Tab.Screen
        name="DiscountsPage"
        component={DiscountPanel}
        options={{title: 'Zniżki'}}
      />
      <Tab.Screen
        name="ResearchPage"
        component={ResearchPanel}
        options={{title: 'Badania'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavStack;
