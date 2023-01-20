//AuthContext.js
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AuthContext = createContext();

const registerDATA = {
  username: 'user',
  email: 'user@mail.com',
  password: 'password',
  role: ['user'],
  firstName: 'Bartosz',
  lastName: 'Kaczor',
  birthDate: '1998-07-15',
  gender: 'MALE',
  pesel: '98071504900',
  bloodType: 'B_NEGATIVE',
};

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState(null);

  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post(`http://10.0.2.2:8082/api/auth/signin`, {username, password})
      .then(response => {
        console.log(response.data);
        let userInfo = response.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.accessToken);

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userInfo.accessToken);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
      });
    // setUserToken('ioiojlkad');
    // AsyncStorage.setItem('userToken', 'ioiojlkad');
    setIsLoading(false);
  };

  const register = username => {
    setIsLoading(true);
    axios
      .post(`http://10.0.2.2:8082/api/auth/signup`, registerDATA)
      .then(response => {
        console.log(response.data);
        console.log(username);
        // let userInfo = response.data;
        // setUserInfo(userInfo);
        // setUserToken(userInfo.accessToken);

        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // AsyncStorage.setItem('userToken', userInfo.accessToken);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
      });
    // setUserToken('ioiojlkad');
    // AsyncStorage.setItem('userToken', 'ioiojlkad');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
      setIsLoading(false);
    } catch (error) {
      console.log('isLogged in error ${error}');
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
