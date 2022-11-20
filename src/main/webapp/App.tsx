import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';

import AuthNavStack from './src/navigations/AuthNavStack';
import TabNavStack from './src/navigations/TabNavStack';

const App = () => {
  return (
    // <View style={styles.container}>
    //   {/* <WelcomeScreen /> */}
    //   {/* <LoginScreen /> */}
    //   {/* <RegistrationScreen /> */}
    //   {/* <HomeScreen /> */}
    // </View>
    <NavigationContainer>
      {/* <AuthNavStack /> */}
      <TabNavStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
  },
});

export default App;
