import React, {useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {AuthProvider} from './src/context/AuthContext';
import {FetchProvider} from './src/context/FetchContext';
import AppNavigation from './src/navigations/AppNavigation';
import AppTabNavigation from './src/navigations/AppTabNavigation';

import {NavigationContainer} from '@react-navigation/native';
import UserProfilePanel from './src/pages/UserProfilePanel';

const App = () => {
  // const [isLoading, setLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState<any>(null);

  return (
    <FetchProvider>
      <AuthProvider>
        <AppNavigation />
        {/* <NavigationContainer>
        <AppTabNavigation />
      </NavigationContainer> */}
      </AuthProvider>
    </FetchProvider>
  );
};

export default App;
