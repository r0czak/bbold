import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Button,
  SafeAreaView,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginPanel = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onLoginPressed = () => {
    console.warn('Logged In');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/appBanner.png')}
        style={[styles.logo, {height: height * 0.4}]}
        resizeMode="contain"
      />
      <CustomInputField
        placeholder="Nazwa użytkownika"
        value={username}
        setValue={setUsername}
        secureTextEntry={undefined}
        icon={'email'}
      />
      <CustomInputField
        placeholder="Hasło"
        value={password}
        setValue={setPassword}
        secureTextEntry
        icon={'lock'}
      />
      <View style={{marginTop: 5}}>
        <TouchableOpacity onPress={undefined}>
          <Text style={{color: '#fff'}}> Zapomniałeś hasła? </Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title="Zaloguj"
        onPress={() => navigation.navigate('HomePage')}
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
