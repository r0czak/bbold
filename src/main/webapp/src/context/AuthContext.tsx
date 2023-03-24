import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import axios from 'axios';
import LoginPanel from '../pages/LoginPanel';
import {FetchContext} from '../context/FetchContext';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [splashLoading, setSplashLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [userToken, setUserToken] = React.useState({});

  //const {fetchAppData}: any = useContext(FetchContext);

  const login = (username, password) => {
    setIsLoading(true);

    axios
      .post(`http://10.0.2.2:8082/api/auth/signin`, {username, password})
      .then(response => {
        let userInfo = response.data;
        setUserInfo(userInfo);
        // setUserToken(userInfo.accessToken);

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        //AsyncStorage.setItem('userToken', userInfo.accessToken);
        //fetchAppData();
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
        setIsLoading(false);
        Alert.alert(
          'Błąd logowania',
          'Podałeś błędną nazwę użytkownika lub hasło. Spróbuj jeszcze raz',
          [{text: 'OK'}],
        );
      });
  };

  const register = async (
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
    try {
      setIsLoading(true);
      const response = await axios.post(
        `http://10.0.2.2:8082/api/auth/signup`,
        {
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
        },
      );
      Alert.alert(
        'Udało się pomyślnie zarejestrować',
        'Możesz teraz przejść do panelu logowania',
        [
          {
            text: 'OK',
          },
        ],
      );

      console.log('response data after success: ' + response.data);
      setIsLoading(false);
    } catch (error) {
      if (!error?.response) {
        console.log('No server response');
        setIsLoading(false);
      } else {
        setIsLoading(false);
        Alert.alert('Błąd rejestracji', error.response.data.message, [
          {
            text: 'OK',
          },
        ]);
      }
    }
  };

  // const register = (
  //   username,
  //   email,
  //   password,
  //   firstName,
  //   lastName,
  //   birthDate,
  //   gender,
  //   pesel,
  //   bloodType,
  // ) => {
  //   setIsLoading(true);
  //   let isRegisterValid: boolean = false;

  //   axios
  //     // .post(`http://10.0.2.2:8082/api/auth/signup`, {
  //     //   username,
  //     //   email,
  //     //   password,
  //     //   role: ['user'],
  //     //   firstName,
  //     //   lastName,
  //     //   birthDate,
  //     //   gender,
  //     //   pesel,
  //     //   bloodType,
  //     // })
  //     .post(`http://10.0.2.2:8082/api/auth/signup`, {
  //       username: 'usernames',
  //       email: 'email12@gmail.com',
  //       password: 'password',
  //       role: ['user'],
  //       firstName: 'Jan',
  //       lastName: 'Kowalski',
  //       birthDate: '13/02/2021',
  //       gender: 'MALE',
  //       pesel: '99021103421',
  //       bloodType: 'A_POSITIVE',
  //     })
  //     .then(response => {
  //       // let userInfo = response.data;
  //       // setUserInfo(userInfo);
  //       // setUserToken(userInfo.accessToken);

  //       // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  //       // AsyncStorage.setItem('userToken', userInfo.accessToken);
  //       // Alert.alert('Udało się pomyślnie zarejestrować użytkownika', '', [
  //       //   {
  //       //     text: 'OK',
  //       //   },
  //       // ]);
  //       console.log('response data: ' + response);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       // Alert.alert('Błąd przy rejestracji', '', [{text: 'OK'}]);
  //       console.log(
  //         'error: ' + error.message + ', -> ' + error.response.data.message,
  //       );
  //       // console.log(`Regsiter error ${e}`);
  //       setIsLoading(false);
  //       if (error.response) {
  //         console.log('response : ' + error.response);
  //       } else if (error.request) {
  //         console.log('request : ' + error.request);
  //       } else if (error.message) {
  //         console.log('message : ' + error.message);
  //       }
  //       //isRegisterValid = false;
  //     });
  // };

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

    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      //fetchAppData();

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
