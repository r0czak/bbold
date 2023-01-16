import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePanel from '../pages/HomePanel';
import BloodCardPanel from '../pages/BloodCardPage';
import MapPanel from '../pages/MapPanel';
import DiscountPanel from '../pages/DiscountPage';
import ResearchPanel from '../pages/ResearchPanel';

import {AuthContext} from '../context/AuthContext';

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
  const {logout} = useContext(AuthContext);

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
        tabBarLabelStyle: {
          fontSize: 12,
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
        options={{
          title: 'Strona główna',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                logout();
              }}>
              <MaterialCommunityIcons name={'account'} color="#fff" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="BloodPage"
        component={BloodCardPanel}
        options={{
          title: 'Krew',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                logout();
              }}>
              <MaterialCommunityIcons name={'account'} color="#fff" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="MapPage"
        component={MapPanel}
        options={{
          title: 'Mapa',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                logout();
              }}>
              <MaterialCommunityIcons name={'account'} color="#fff" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="DiscountsPage"
        component={DiscountPanel}
        options={{
          title: 'Zniżki',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                logout();
              }}>
              <MaterialCommunityIcons name={'account'} color="#fff" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="ResearchPage"
        component={ResearchPanel}
        options={{
          title: 'Badania',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                logout();
              }}>
              <MaterialCommunityIcons name={'account'} color="#fff" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigation;
