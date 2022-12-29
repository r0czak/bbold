import React, {useCallback, useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet} from 'react-native';

import AppStackNavigation from './src/navigations/AppStackNavigation';
import AppTabNavigation from './src/navigations/AppTabNavigation';

const App = () => {
  // const authContext = useContext(AuthContext);
  // const [status, setStatus] = useState('loading');

  // const loadJWT = useCallback(async () => {
  //   try {
  //     const value = await Keychain.getGenericPassword();
  //     const jwt = JSON.parse(value.password);

  //     authContext.setAuthState({
  //       accessToken: jwt.accessToken || null,
  //       refreshToken: jwt.refreshToken || null,
  //       authenticated: jwt.accessToken !== null,
  //     });
  //     setStatus('success');
  //   } catch (error) {
  //     setStatus('error');
  //     console.log('Keychain error: ${error.message}');
  //     authContext.setAuthState({
  //       accessToken: null,
  //       refreshToken: null,
  //       authenticated: false,
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   loadJWT();
  // }, [loadJWT]);

  // if (status == 'loading') {
  //   return <Spinner />;
  // }

  // if (authContext?.authState?.authenticated === false) {
  //   return <AppStackNavigation />;
  // } else {
  //   return <AppTabNavigation />;
  // }

  return (
    //<AppTabNavigation />
    <AppStackNavigation />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
  },
});

export default App;
