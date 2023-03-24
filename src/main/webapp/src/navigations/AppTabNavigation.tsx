import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePanel from '../pages/HomePanel';
import BloodCardPanel from '../pages/BloodCardPage';
import MapPanel from '../pages/MapPanel';
import DiscountPanel from '../pages/DiscountPage';
import ResearchPanel from '../pages/ResearchPanel';
import UserProfilePanel from '../pages/UserProfilePanel';
import NewsViewPanel from '../pages/NewsViewPanel';
import VadenecumPage from '../pages/VadenecumPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppTabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#ffc64a',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#c43b3d',
          padding: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: getHeaderBarVisibility(route),
        headerStyle: {
          backgroundColor: '#c43b3d',
          height: 45,
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerRight: () => (
          <TouchableOpacity
            style={{margin: 10}}
            onPress={() => navigation.navigate('UserProfilePanel')}>
            <MaterialCommunityIcons name={'account'} color="#fff" size={27} />
          </TouchableOpacity>
        ),
      })}>
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
        })}
      />
      <Tab.Screen
        name="Blood"
        component={BloodPanelStack}
        options={({route}) => ({
          title: 'Krew',
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#c43b3d',
            padding: 5,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="water" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Map"
        component={MapPanelStack}
        options={({route}) => ({
          title: 'Mapa',
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#c43b3d',
            padding: 5,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="google-maps"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Discounts"
        component={DiscountsPanelStack}
        options={({route}) => ({
          title: 'Zniżki',
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#c43b3d',
            padding: 5,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="ticket-percent"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Research"
        component={ResearchPanelStack}
        options={({route}) => ({
          title: 'Badania',
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#c43b3d',
            padding: 5,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-pulse"
              color={color}
              size={size}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (
    routeName == 'NewsPanel' ||
    routeName == 'UserProfilePanel' ||
    routeName == 'VadenecumPage'
  ) {
    return 'none';
  }

  return 'flex';
};

const getHeaderBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (
    routeName == 'NewsPanel' ||
    routeName == 'UserProfilePanel' ||
    routeName == 'VadenecumPage'
  ) {
    return false;
  }

  return true;
};

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
          // headerShown: false,
          headerStyle: {
            backgroundColor: '#c43b3d',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
      <Stack.Screen
        name="UserProfilePanel"
        component={UserProfilePanel}
        options={{
          title: 'Panel użytkownika',
          // headerShown: false,
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

const BloodPanelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BloodCard"
        component={BloodCardPanel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VadenecumPage"
        component={VadenecumPage}
        options={{
          title: 'Vadenecum krwiodawcy',
          // headerShown: false,
          headerStyle: {
            backgroundColor: '#c43b3d',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
      <Stack.Screen
        name="UserProfilePanel"
        component={UserProfilePanel}
        options={{
          title: 'Aktualności',
          // headerShown: false,
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

const MapPanelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapPanelStack"
        component={MapPanel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfilePanel"
        component={UserProfilePanel}
        options={{
          title: 'Aktualności',
          // headerShown: false,
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

const DiscountsPanelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscountPanelStack"
        component={DiscountPanel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfilePanel"
        component={UserProfilePanel}
        options={{
          title: 'Aktualności',
          // headerShown: false,
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

const ResearchPanelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResearchPanelStack"
        component={ResearchPanel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfilePanel"
        component={UserProfilePanel}
        options={{
          title: 'Aktualności',
          // headerShown: false,
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

export default AppTabNavigation;
