import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStackNavigation from './AppStackNavigation';
import AppTabNavigation from './AppTabNavigation';
import {AuthContext} from '../context/AuthContext';

const AppNavigation = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppTabNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
