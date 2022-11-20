import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Button,
  ScrollView,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const RegistrationPanel = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    // <ScrollView
    //   style={styles.container}
    //   contentInsetAdjustmentBehavior={'automatic'}>
    <View style={styles.container}>
      <MaterialIcon name="arrow-left-thick" size={28} color="#fff" />
      <Text style={styles.pageTitle}> Rejestracja konta dawcy </Text>
      <ImageBackground
        source={require('../../assets/images/appLogo.png')}
        resizeMode="contain"
        style={styles.backgroundImage}>
        <View>
          <Text style={styles.temp1}> Dane szczegółowe dawcy </Text>
          <CustomInputField
            placeholder="Imię"
            value={username}
            setValue={setUsername}
            secureTextEntry={undefined}
            icon={'account'}
          />
          <CustomInputField
            placeholder="Nazwisko"
            value={password}
            setValue={setPassword}
            secureTextEntry
            icon={'account'}
          />
          <CustomInputField
            placeholder="Data urodzenia"
            value={username}
            setValue={setUsername}
            secureTextEntry={undefined}
            icon={'calendar-month'}
          />
          <CustomInputField
            placeholder="Pesel"
            value={password}
            setValue={setPassword}
            secureTextEntry
            icon={'numeric'}
          />
          <View style={{marginTop: 25}} />
          <Text style={styles.temp2}> Dane logowania </Text>
          <CustomInputField
            placeholder="Nazwa użytkownika"
            value={username}
            setValue={setUsername}
            secureTextEntry={undefined}
            icon={'badge-account-horizontal'}
          />
          <CustomInputField
            placeholder="E-mail"
            value={password}
            setValue={setPassword}
            secureTextEntry
            icon={'email'}
          />
          <CustomInputField
            placeholder="Hasło"
            value={password}
            setValue={setPassword}
            secureTextEntry
            icon={'lock'}
          />
        </View>
        {/* <CustomButton title="Zarejestruj konto dawcy" onPress={undefined} />
        <View style={styles.loginLinkView}>
          <Text style={styles.loginLinkText}>
            Jesteś już aktywnym krwiodawcą?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}> Zaloguj się </Text>
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
      <CustomButton title="Zarejestruj konto dawcy" onPress={undefined} />
      <View style={styles.loginLinkView}>
        <Text style={styles.loginLinkText}>
          Jesteś już aktywnym krwiodawcą?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.loginLink}> Zaloguj się </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  temp1: {
    color: '#fff',
  },
  temp2: {
    color: '#fff',
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
