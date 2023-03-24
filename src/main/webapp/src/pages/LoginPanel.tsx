import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';
import Spinner from 'react-native-loading-spinner-overlay';

import {AuthContext} from '../context/AuthContext';
// import {AxiosContext} from '../context/AxiosContext';

const LoginPanel = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({
    usernameError: '',
    passwordError: '',
  });

  const {login, isLoading}: any = useContext(AuthContext);

  const loginValidation = () => {
    Keyboard.dismiss();
    let isValid: boolean = true;

    if (!data.username) {
      handleError('Wprowadź nazwę użytkownika', 'usernameError');
      isValid = false;
    } else if (data.username.length < 3) {
      handleError('Wprowadź poprawną nazwę użytkownika', 'usernameError');
      isValid = false;
    }

    if (!data.password) {
      handleError('Wprowadź hasło', 'passwordError');
      isValid = false;
    } else if (data.password.length < 6) {
      handleError('Wprowadź poprawne hasło', 'passwordError');
      isValid = false;
    }

    return isValid;
  };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     setData('');
  //     setErrors('');
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  const handleOnchange = (text, input) => {
    setData(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const {height} = useWindowDimensions();

  const handleLogin = () => {
    if (loginValidation() == true) {
      login(data.username, data.password);
      console.log('login to app');
    } else {
      console.log('login validation error');
    }
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Image
        source={require('../../assets/images/appBanner.png')}
        style={[styles.logo, {height: height * 0.4}]}
        resizeMode="contain"
      />
      <View>
        <CustomInputField
          onChangeText={text => handleOnchange(text, 'username')}
          onFocus={() => handleError(null, 'usernameError')}
          label="Username"
          placeholder="Nazwa użytkownika"
          iconName={'badge-account-horizontal'}
          error={errors.usernameError}
          password={undefined}
        />
        <CustomInputField
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'passwordError')}
          label="Password"
          placeholder="Hasło"
          iconName={'lock'}
          error={errors.passwordError}
          password
        />
      </View>
      <View style={{marginTop: 5}}>
        <TouchableOpacity onPress={undefined}>
          <Text style={{color: '#fff'}}> Zapomniałeś hasła? </Text>
        </TouchableOpacity>
      </View>

      <CustomButton title="Zaloguj" onPress={() => handleLogin()} />

      <View style={styles.loginLinkView}>
        <Text style={styles.loginLinkText}>
          Nie jesteś jeszcze aktywnym krwiodawcą?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
          <Text style={styles.loginLink}> Zarejestruj się </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#c43b3d',
    opacity: 0.95,
  },
  logo: {
    width: '70%',
    maxWidth: 550,
    maxheight: 700,
    marginBottom: 60,
  },
  tempText: {
    color: 'white',
  },
  loginLinkView: {
    marginVertical: 30,
    color: '#fff',
    alignItems: 'center',
  },
  loginLinkText: {
    color: '#fff',
    fontSize: 17,
  },
  loginLink: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default LoginPanel;
