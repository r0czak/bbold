//AuthContext.js
import React, {createContext, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import axios from 'axios';
import LoginPanel from '../pages/LoginPanel';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [splashLoading, setSplashLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState({});

  const login = (username, password) => {
    setIsLoading(true);

    axios
      .post(`http://10.0.2.2:8082/api/auth/signin`, {username, password})
      .then(response => {
        // console.log(response.data);

        let userInfo = response.data;
        setUserInfo(userInfo);
        // setUserToken(userInfo.accessToken);

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        //AsyncStorage.setItem('userToken', userInfo.accessToken);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
        setIsLoading(false);
        Alert.alert(
          'Błąd logowania',
          'Podałeś błędną nazwę użytkownika bądź hasło. Spróbuj jeszcze raz',
          [{text: 'OK'}],
        );
      });
  };

  const register = (
    username,
    email,
    password,
    firstName,
    lastName,
    birthDate,
    gender,
    pesel,
    bloodType,
  ) => {
    setIsLoading(true);

    axios
      .post(`http://10.0.2.2:8082/api/auth/signup`, {
        username,
        email,
        password,
        role: ['user'],
        firstName,
        lastName,
        birthDate,
        gender,
        pesel,
        bloodType,
      })
      .then(response => {
        // let userInfo = response.data;
        // setUserInfo(userInfo);
        // setUserToken(userInfo.accessToken);

        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // AsyncStorage.setItem('userToken', userInfo.accessToken);

        Alert.alert(
          'Zarejestrowano pomyślnie',
          'Możesz teraz zalogować się do swojego konta w aplikacji',
          [{text: 'OK'}],
        );
        console.log('response data: ' + response);
        setIsLoading(false);
      })
      .catch(e => {
        Alert.alert('Błąd przy rejestracji', 'Błąd ' + e.response.message, [
          {text: 'OK'},
        ]);
        console.log('response error: ' + e.response.message);
        console.log(`Regsiter error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `http://10.0.2.2:8082/api/auth/signout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.accessToken}`},
        },
      )
      .then(response => {
        console.log(response.data);

        AsyncStorage.removeItem('userInfo');
        // AsyncStorage.removeItem('userToken');
        //setUserToken(null);
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log('logout error:' + e.response);

        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      //let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        //setUserToken(userToken);
      }

      setSplashLoading(false);
    } catch (error) {
      setSplashLoading(false);
      console.log('isLogged in error ${error}');
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        splashLoading,
        isLoading,
        userInfo,
        userToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
