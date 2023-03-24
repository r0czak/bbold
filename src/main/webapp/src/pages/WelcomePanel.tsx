import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';

const WelcomePanel = ({navigation}) => {
  const {height} = useWindowDimensions();

  const onPressedFunction = () => {
    Alert.alert('Alert window');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}> Witamy w aplikacji 'BBold' </Text>
      <Image
        source={require('../../assets/images/welcomeWidget.png')}
        style={styles.banner}
        resizeMode="contain"
      />
      <Text style={styles.descriptionText}>
        Aplikacja dla krwiodwaców dzięki której będziesz miał/a wszystkie
        potrzebne aktualności, informacje i powiadomienia w jednym miejscu!
        Zaloguj się na swoje indywidualne konto, bądź zarejestruj się jeśli
        jeszcze nie jesteś czynnym dawcą krwi i zacznij pomagać innym!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.buttonText}>Przejdź do konta dawcy</Text>
        <MaterialIcon name="arrow-forward" size={28} color="#fff" />
      </TouchableOpacity>
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
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headline: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 50,
    color: '#e05a5c',
    letterSpacing: 0.5,
    fontFamily: 'RobotoCondensed-BoldItalic',
  },
  banner: {
    width: '100%',
    maxWidth: 550,
    maxheight: 700,
  },
  descriptionText: {
    marginVertical: 15,
    marginHorizontal: 15,
    textAlign: 'center',
    fontSize: 15,
  },
  button: {
    marginVertical: 15,
    backgroundColor: '#e05a5c',
    padding: 15,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    letterSpacing: 0.5,
    color: '#fff',
    fontFamily: 'Roboto',
  },
  loginLinkView: {
    marginTop: 30,
    alignItems: 'center',
  },
  loginLinkText: {
    fontSize: 14,
  },
  loginLink: {
    fontSize: 15,
    color: '#e05a5c',
    fontWeight: 'bold',
  },
});

export default WelcomePanel;
