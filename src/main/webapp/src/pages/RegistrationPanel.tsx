import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Alert,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomDropDown from '../components/CustomDropDown';
import CustomButton from '../components/CustomButton';
import CustomDatePicker from '../components/CustomDatePicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import {validatePolish} from 'validate-polish';
import {AuthContext} from '../context/AuthContext';

const genderOption = [
  {key: '1', id: 'MALE', name: 'Mężczyzna'},
  {key: '2', id: 'FEMALE', name: 'Kobieta'},
];

const bloodTypeOption = [
  {key: '1', id: 'A_POSITIVE', name: 'A Rh+'},
  {key: '2', id: 'A_NEGATIVE', name: 'A Rh-'},
  {key: '3', id: 'B_POSITIVE', name: 'B Rh+'},
  {key: '4', id: 'B_NEGATIVE', name: 'B Rh-'},
  {key: '5', id: 'AB_POSITIVE', name: 'AB Rh+'},
  {key: '6', id: 'AB_NEGATIVE', name: 'AB Rh-'},
  {key: '7', id: '0_POSITIVE', name: '0 Rh+'},
  {key: '8', id: '0_NEGATIVE', name: '0 Rh-'},
];

const RegistrationPanel = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    peselNumber: '',
    birthdate: '',
    gender: '',
    bloodType: '',
  });

  const [errors, setErrors] = React.useState({
    usernameError: '',
    passwordError: '',
    emailError: '',
    firstnameError: '',
    lastnameError: '',
    peselNumberError: '',
    birthdateError: '',
    genderError: '',
    bloodTypeError: '',
  });

  const {register, isLoading}: any = useContext(AuthContext);

  const registerValidation = () => {
    Keyboard.dismiss();
    let isValid: boolean = true;

    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!data.username || data.username.length < 3) {
      handleError('Wprowadź poprawną nazwę użytkownika', 'usernameError');
      isValid = false;
    }

    if (
      // !data.password ||
      data.password.length < 6 ||
      !passwordRegex.test(data.password)
    ) {
      handleError('Wprowadź poprawne hasło', 'passwordError');
      isValid = false;
    }

    if (!data.email || !emailRegex.test(data.email)) {
      handleError('Wprowadź poprawny email', 'emailError');
      isValid = false;
    }

    if (!data.firstname) {
      handleError('Wprowadź swoje imie', 'firstnameError');
      isValid = false;
    }

    if (!data.lastname) {
      handleError('Wprowadź swoje nazwisko', 'lastnameError');
      isValid = false;
    }

    if (!data.peselNumber || data.peselNumber.length != 11) {
      handleError('Wprowadź poprawny numer pesel', 'peselNumberError');
      isValid = false;
    }

    if (!data.birthdate || !validateBirthdate(data.birthdate)) {
      handleError('Wprowadź poprawną datę urodzenia', 'birthdateError');
      isValid = false;
    }

    if (!data.gender) {
      handleError('Wybierz swoją płeć', 'genderError');
      isValid = false;
    }

    if (!data.bloodType) {
      handleError('Wybierz swoją grupę krwi', 'bloodTypeError');
      isValid = false;
    }

    return isValid;
  };

  const validateBirthdate = birthdate => {
    let isValid: boolean = true;

    var bday = birthdate;
    bday = bday.split('-');
    var birthdateMiliseconds = new Date(
      parseInt(bday[0], 10),
      parseInt(bday[1], 10) - 1,
      parseInt(bday[2]),
      10,
    ).getTime();

    var nowDate = new Date().getTime();

    if (nowDate - birthdateMiliseconds > 567648000000) {
      isValid = true;
    } else {
      Alert.alert(
        'Pamiętaj',
        'Nie możesz zostać dawcą krwi poniżej 18 roku życia',
        [
          {
            text: 'OK',
          },
        ],
      );
      isValid = false;
    }

    return isValid;
  };

  const handleOnChange = (value, input) => {
    setData(prevState => ({...prevState, [input]: value}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const handleRegister = () => {
    if (registerValidation() == true) {
      register(
        data.username,
        data.email,
        data.password,
        data.firstname,
        data.lastname,
        data.birthdate,
        data.gender,
        data.peselNumber,
        data.bloodType,
      );
    } else {
      console.log('register validation error');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/appLogo.png')}
      resizeMode="contain"
      style={styles.backgroundImage}>
      <Spinner visible={isLoading} />
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', margin: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Icon name="arrow-left-thick" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}> Rejestracja konta dawcy </Text>
        </View>
        <View>
          <Text style={{color: '#fff', fontSize: 16}}>
            Dane szczegółowe dawcy
          </Text>
          <CustomInputField
            onChangeText={value => handleOnChange(value, 'firstname')}
            onFocus={() => handleError(null, 'firstnameError')}
            label="FirstName"
            placeholder="Imię"
            iconName={'account'}
            error={errors.firstnameError}
            password={undefined}
          />
          <CustomInputField
            onChangeText={value => handleOnChange(value, 'lastname')}
            onFocus={() => handleError(null, 'lastnameError')}
            label="LastName"
            placeholder="Nazwisko"
            iconName={'account'}
            error={errors.lastnameError}
            password={undefined}
          />
          <CustomDatePicker
            setPicker={value => handleOnChange(value, 'birthdate')}
            onFocus={() => handleError(null, 'birthdateError')}
            error={errors.birthdateError}
          />
          <CustomInputField
            keyboardType="numeric"
            onChangeText={value => handleOnChange(value, 'peselNumber')}
            onFocus={() => handleError(null, 'peselNumberError')}
            label="PeselNumber"
            placeholder="Pesel"
            iconName={'numeric'}
            error={errors.peselNumberError}
            password={undefined}
          />
          <CustomDropDown
            setPicker={value => handleOnChange(value, 'gender')}
            onFocus={() => handleError(null, 'genderError')}
            listData={genderOption}
            iconName={'gender-male-female'}
            placeholder={'Płeć'}
            error={errors.genderError}
          />
          <CustomDropDown
            setPicker={value => handleOnChange(value, 'bloodType')}
            onFocus={() => handleError(null, 'bloodTypeError')}
            listData={bloodTypeOption}
            iconName={'blood-bag'}
            placeholder={'Grupa krwi'}
            error={errors.bloodTypeError}
          />
          <View style={{marginTop: 25}} />
          <Text style={{color: '#fff', fontSize: 16}}> Dane logowania </Text>
          <CustomInputField
            onChangeText={value => handleOnChange(value, 'username')}
            onFocus={() => handleError(null, 'usernameError')}
            label="Username"
            placeholder="Nazwa użytkownika"
            iconName={'badge-account-horizontal'}
            error={errors.usernameError}
            password={undefined}
          />
          <CustomInputField
            onChangeText={value => handleOnChange(value, 'email')}
            onFocus={() => handleError(null, 'emailError')}
            label="Email"
            placeholder="E-mail"
            iconName={'email'}
            error={errors.emailError}
            password={undefined}
          />
          <CustomInputField
            onChangeText={value => handleOnChange(value, 'password')}
            onFocus={() => handleError(null, 'passwordError')}
            label="Password"
            placeholder="Hasło"
            iconName={'lock'}
            error={errors.passwordError}
            password
          />
        </View>
        {/* </ImageBackground> */}
        <CustomButton
          title="Zarejestruj konto dawcy"
          onPress={() => {
            handleRegister();
          }}
        />
        <View style={styles.loginLinkView}>
          <Text style={styles.loginLinkText}>
            Jesteś już aktywnym krwiodawcą?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.loginLink}> Zaloguj się </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#c43b3d',
    // opacity: 0.8,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#c43b3d',
    opacity: 0.95,
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
  dropdown: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});

export default RegistrationPanel;
