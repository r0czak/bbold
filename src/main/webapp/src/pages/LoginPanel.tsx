import React, {useState, useContext} from 'react';
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

import {AuthContext} from '../context/AuthContext';
import {AxiosContext} from '../context/AxiosContext';
import * as Keychain from 'react-native-keychain';

const LoginPanel = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({
    username: '',
    password: '',
  });

  const {login, logout} = useContext(AuthContext);

  // const check_password_regex = password => {
  //   return (
  //     /[A-Z]/.test(password) &&
  //     /[0-9]/.test(password) &&
  //     /[aeiou]/.test(password) &&
  //     /[A-Za-z0-9]{6}$/.test(password)
  //   );
  // };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!data.username) {
      handleError('Wprowadź nazwę użytkownika', 'username');
      isValid = false;
    } else if (data.username.length < 3) {
      handleError('Wprowadź poprawną nazwę użytkownika', 'username');
      isValid = false;
    } else {
      handleError('', 'username');
      isValid = true;
    }

    if (!data.password) {
      handleError('Wprowadź hasło', 'password');
      isValid = false;
    } else if (data.password.length < 5) {
      handleError('Wprowadź poprawne hasło', 'password');
      isValid = false;
    } else {
      handleError('', 'password');
      isValid = true;
    }

    // else if (!check_password_regex(data.password)) {
    //   handleError('Wprowadź poprawne hasło', 'password');
    //   isValid = false;
    // } else {
    //   handleError('', 'password');
    //   isValid = true;
    // }

    if (isValid) {
      // register();
      console.log(
        'username: ' + data.username + ' adn password: ' + data.password,
      );
    }
  };

  const handleOnchange = (text, input) => {
    setData(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const {height} = useWindowDimensions();

  // const showAlert = () =>
  //   Alert.alert(
  //     'Błąd logowania!',
  //     'Niepoprawna nazwa użytkownika bądź hasło.',
  //     [
  //       {
  //         text: 'Ok',
  //       },
  //     ],
  //     {
  //       cancelable: true,
  //       onDismiss: () =>
  //         Alert.alert(
  //           'This alert was dismissed by tapping outside of the alert dialog.',
  //         ),
  //     },
  //   );

  const onLoginPressed = () => {
    //showAlert();
    validate();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/appBanner.png')}
        style={[styles.logo, {height: height * 0.4}]}
        resizeMode="contain"
      />
      {/* <CustomInputField
        placeholder="Nazwa użytkownika"
        value={username}
        setValue={setUsername}user
        icon={'email'}
      />
      <PasswordInputField
        placeholder="Hasło"
        value={password}
        setValue={setPassword}
      /> */}
      <View>
        <CustomInputField
          //onChangeText={text => setEmail(text)}
          onChangeText={text => handleOnchange(text, 'username')}
          //onFocus={() => handleError(null, 'username')}
          label="Username"
          placeholder="Nazwa użytkownika"
          iconName={'badge-account-horizontal'}
          error={errors.username}
          password={undefined}
        />
        <CustomInputField
          //onChangeText={text => setPassword(text)}
          onChangeText={text => handleOnchange(text, 'password')}
          //onFocus={() => handleError(null, 'password')}
          label="Password"
          placeholder="Hasło"
          iconName={'lock'}
          error={errors.password}
          password
        />
      </View>
      {/* <CustomInputField
        onChangeText={text => handleOnchange(text, 'username')}
        //onFocus={() => handleError(null, 'username')}
        label="Username"
        placeholder="Nazwa użytkownika"
        iconName={'badge-account-horizontal'}
        error={errors.username}
      />
      <CustomInputField
        onChangeText={text => handleOnchange(text, 'password')}
        //onFocus={() => handleError(null, 'password')}
        label="Password"
        placeholder="Hasło"
        iconName={'lock'}
        error={errors.password}
        password
      /> */}
      <View style={{marginTop: 5}}>
        <TouchableOpacity onPress={undefined}>
          <Text style={{color: '#fff'}}> Zapomniałeś hasła? </Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title="Zaloguj"
        //onPress={() => onLoginPressed()}
        onPress={() => {
          login(data.username, data.password);
        }}
      />

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
