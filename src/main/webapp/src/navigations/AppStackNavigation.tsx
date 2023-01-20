import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomePanel from '../pages/WelcomePanel';
import LoginScreen from '../pages/LoginPanel';
import RegistrationPanel from '../pages/RegistrationPanel';
import HomePanel from '../pages/HomePanel';

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomePage" component={WelcomePanel} />
      <Stack.Screen name="LoginPage" component={LoginScreen} />
      <Stack.Screen name="RegisterPage" component={RegistrationPanel} />
      <Stack.Screen name="HomePage" component={HomePanel} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
