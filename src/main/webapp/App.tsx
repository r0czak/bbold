import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Settings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet} from 'react-native';

import {AuthProvider} from './src/context/AuthContext';
import Spinner from './src/components/Spinner';

import SettingsPanel from './src/pages/SettingsPanel';

import AppNavigation from './src/navigations/AppNavigation';
import AppTabNavigation from './src/navigations/AppTabNavigation';
const App = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState<any>(null);

  return (
    <AuthProvider>
      {/* <AppNavigation /> */}
      <NavigationContainer>
        <AppTabNavigation />
      </NavigationContainer>
    </AuthProvider>
    // <NavigationContainer>
    //   <AuthStackNavigation />
    // </NavigationContainer>

    //<UserProfilePanel />
    // <SettingsPanel />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
  },
});

export default App;
