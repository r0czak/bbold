import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStackNavigation from './AppStackNavigation';
import AppTabNavigation from './AppTabNavigation';
import SplashScreen from '../pages/SplashScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const TempSplashScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const {userInfo, splashLoading}: any = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Spinner visible={splashLoading} />
      {/* {splashLoading ? (
        <TempSplashScreenStack />
      ) : userInfo.access_token ? (
        <AppTabNavigation />
      ) : (
        <AuthStackNavigation />
      )} */}
      {userInfo.accessToken ? <AppTabNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
