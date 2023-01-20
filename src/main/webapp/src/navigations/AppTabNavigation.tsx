import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePanel from '../pages/HomePanel';
import BloodCardPanel from '../pages/BloodCardPage';
import MapPanel from '../pages/MapPanel';
import DiscountPanel from '../pages/DiscountPage';
import ResearchPanel from '../pages/ResearchPanel';
import UserProfilePanel from '../pages/UserProfilePanel';
import NewsViewPanel from '../pages/NewsViewPanel';

import {AuthContext} from '../context/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePanel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsPanel"
        component={NewsViewPanel}
        options={{
          title: 'Aktualności',
          headerStyle: {
            backgroundColor: '#c43b3d',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const UserProfileStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="UserProfile" component={UserProfilePanel} />
  </Stack.Navigator>;
};

const AppTabNavigation = () => {
  const {logout} = useContext(AuthContext);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#ffc64a',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#c43b3d',
          padding: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerStyle: {
          backgroundColor: '#c43b3d',
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          title: 'Główna',
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#c43b3d',
            padding: 5,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          // headerShown: getHeaderBarVisibility(route),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons name={'account'} color="#fff" size={25} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Blood"
        component={BloodCardPanel}
        options={{
          title: 'Krew',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="water" color={color} size={size} />
          ),
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
        name="Map"
        component={MapPanel}
        options={{
          title: 'Mapa',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="google-maps"
              color={color}
              size={size}
            />
          ),
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
        name="Discounts"
        component={DiscountPanel}
        options={{
          title: 'Zniżki',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="ticket-percent"
              color={color}
              size={size}
            />
          ),
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
        name="Research"
        component={ResearchPanel}
        options={{
          title: 'Badania',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-pulse"
              color={color}
              size={size}
            />
          ),
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

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (routeName == 'NewsPanel' || routeName == 'UserProfile') {
    return 'none';
  }

  return 'flex';
};

const getHeaderBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (routeName == 'NewsPanel' || routeName == 'UserProfile') {
    return false;
  }

  return true;
};

// const changeHeaderBarStyle = route => {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

//   if (routeName == 'NewsPanel' || routeName == 'UserProfile') {
//     return false;
//   }

//   return true;
// };

export default AppTabNavigation;
