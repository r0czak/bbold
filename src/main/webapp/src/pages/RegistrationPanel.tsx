import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import PasswordInputField from '../components/PasswordInputField';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect} from 'react';

const RegistrationPanel = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    surname: '',
    peselNumber: '',
    birthdate: '',
  });

  const [errors, setErrors] = React.useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    surname: '',
    peselNumber: '',
    birthdate: '',
  });
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!data.firstname) {
      handleError('Wprowadź imię', 'firstname');
      isValid = false;
    } else if (data.firstname.length < 3) {
      handleError('Wprowadź poprawne imię', 'firstname');
      isValid = false;
    } else {
      handleError('', 'firstname');
      isValid = true;
    }

    if (!data.surname) {
      handleError('Wprowadź nazwisko', 'surname');
      isValid = false;
    }

    if (!data.email) {
      handleError('Wprowadź email', 'email');
      isValid = false;
    } else if (!data.email.match(/\S+@\S+\.\S+/)) {
      handleError('Wprowadź poprawny email', 'email');
      isValid = false;
    }

    if (!data.username) {
      handleError('Wprowadź nazwę użytkownika', 'username');
      isValid = false;
    }

    if (!data.peselNumber) {
      handleError('Wprowadź numer pesel', 'peselNumber');
      isValid = false;
    } else if (data.peselNumber.length != 11) {
      handleError('Wprowadź poprawny numer pesel', 'peselNumber');
      isValid = false;
    }

    if (!data.password) {
      handleError('Wprowadź hasło', 'password');
      isValid = false;
    } else if (data.password.length < 10) {
      handleError(
        'Twoje hasło powinno zawierać dużą literę, liczbę i znak specjalny',
        'password',
      );
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    //validate();
    //setLoading(!loading);
    console.log('registration');
  };

  const handleOnchange = (text, input) => {
    setData(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.container}> */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Icon name="arrow-left-thick" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}> Rejestracja konta dawcy </Text>
      </View>
      {/* <Icon name="arrow-left-thick" size={28} color="#fff" />
      <Text style={styles.pageTitle}> Rejestracja konta dawcy </Text> */}
      <ImageBackground
        source={require('../../assets/images/appLogo.png')}
        resizeMode="contain"
        style={styles.backgroundImage}>
        <View>
          <Text style={{color: '#fff', fontSize: 20}}>
            Dane szczegółowe dawcy
          </Text>
          <CustomInputField
            onChangeText={text => handleOnchange(text, 'firstname')}
            onFocus={() => handleError(null, 'firstname')}
            label="Name"
            placeholder="Imię"
            iconName={'account'}
            error={errors.firstname}
            password={undefined}
          />
          <CustomInputField
            onChangeText={text => handleOnchange(text, 'surname')}
            onFocus={() => handleError(null, 'surname')}
            label="Surname"
            placeholder="Nazwisko"
            iconName={'account'}
            error={errors.surname}
            password={undefined}
          />
          <CustomInputField
            keyboardType="date"
            onChangeText={text => handleOnchange(text, 'birhtdate')}
            onFocus={() => handleError(null, 'birthdate')}
            label="Birthdate"
            placeholder="Data urodzenia"
            iconName={'calendar-month'}
            error={errors.birthdate}
            password={undefined}
          />
          <CustomInputField
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'peselNumber')}
            onFocus={() => handleError(null, 'peselNumber')}
            label="PeselNumber"
            placeholder="Pesel"
            iconName={'numeric'}
            error={errors.peselNumber}
            password={undefined}
          />
          <View style={{marginTop: 25}} />
          <Text style={{color: '#fff', fontSize: 20}}> Dane logowania </Text>
          <CustomInputField
            onChangeText={text => handleOnchange(text, 'username')}
            onFocus={() => handleError(null, 'username')}
            label="Username"
            placeholder="Nazwa użytkownika"
            iconName={'badge-account-horizontal'}
            error={errors.username}
            password={undefined}
          />
          <CustomInputField
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            label="Email"
            placeholder="E-mail"
            iconName={'email'}
            error={errors.email}
            password={undefined}
          />
          <CustomInputField
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            label="Password"
            placeholder="Hasło"
            iconName={'lock'}
            error={errors.password}
            password
          />
          {/* <PasswordInputField
              placeholder="Hasło"
              value={password}
              setValue={setPassword}
            /> */}
        </View>
      </ImageBackground>
      <CustomButton title="Zarejestruj konto dawcy" onPress={validate} />
      <View style={styles.loginLinkView}>
        <Text style={styles.loginLinkText}>
          Jesteś już aktywnym krwiodawcą?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.loginLink}> Zaloguj się </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c43b3d',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    color: '#000',
  },
  pageTitle: {
    color: '#fff',
    marginBottom: 25,
    marginLeft: 25,
    fontSize: 23,
    fontWeight: 'bold',
  },
  loginLinkView: {
    marginVertical: 15,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
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

export default RegistrationPanel;
