import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import CustomButton from '../components/CustomButton';
import CustomDropDown from '../components/CustomDropDown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfilePanel = () => {
  const {userInfo, logout, isLoading}: any = React.useContext(AuthContext);

  const [bloodPoints, setBloodPoints] = React.useState({});
  const [cityId, setCityId] = React.useState();

  const fetchBloodPoints = () => {
    axios
      .get(`http://10.0.2.2:8082/api/center`)
      .then(response => setBloodPoints(response.data))
      .catch(error => console.log(error));
  };

  const setBloodPointId = value => {
    // setCityId(value);
    if (cityId != null) {
      AsyncStorage.setItem('cityId', cityId);
    }
  };

  // const handleOnChange = (value, input) => {
  //   setData(prevState => ({...prevState, [input]: value}));
  // };
  // setPicker={value => handleOnChange(value, 'gender')}

  useEffect(() => {
    fetchBloodPoints();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userHeader}>
        <View>
          <Image
            source={require('../../assets/images/userAvatar.png')}
            style={{width: 120, height: 120}}
          />
        </View>
        <View style={styles.userHeaderText}>
          <Text style={{fontSize: 22, color: '#000'}}> JAN KOWALSKI </Text>
          <Text style={{marginTop: 5, fontSize: 20}}>
            {' '}
            {userInfo.username}{' '}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.honoryCard}
        onPress={() => {
          Alert.alert('Karta honorowego dawcy', 'Przejście do ustawień', [
            {text: 'OK'},
          ]);
        }}>
        <Text style={styles.honoryCardText}> Karta honorowego dawcy krwi </Text>
        <Icon name="keyboard-arrow-right" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={{margin: 5, fontSize: 14}}> Ustawienia aplikacji </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 1,
          marginBottom: 5,
        }}
      />

      <TouchableOpacity
        style={styles.tempButton}
        onPress={() => {
          Alert.alert('Alert', 'Przejście do ustawień', [{text: 'OK'}]);
        }}>
        <Text style={{color: '#000', fontSize: 15}}>
          Dane użytkownika/zmiana profilu
        </Text>
        <Icon name="keyboard-arrow-right" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tempButton}
        onPress={() => {
          Alert.alert('Alert', 'Przejście do ustawień', [{text: 'OK'}]);
        }}>
        <Text style={{color: '#000', fontSize: 15}}>
          {' '}
          Ustawienia aplikacji{' '}
        </Text>
        <Icon name="keyboard-arrow-right" size={28} color="#000" />
      </TouchableOpacity>

      <Text style={{margin: 5, fontSize: 14}}> Punkt RCKiK </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 1,
        }}
      />
      <CustomDropDown
        setPicker={setBloodPointId}
        //onFocus={() => handleError(null, 'bloodTypeError')}
        listData={bloodPoints}
        iconName={'google-maps'}
        placeholder={'Wybierz swój punkt RCKiK'}
        error={undefined}
      />

      <CustomButton
        title="Wyloguj się"
        onPress={() => {
          logout();
        }}
      />

      <View
        style={{
          margin: 20,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  userHeader: {
    height: 150,
    padding: 10,
    backgroundColor: '#ffffff',
    marginTop: 10,
    borderRadius: 7,
    flexDirection: 'row',
  },
  userHeaderText: {
    margin: 20,
  },
  honoryCard: {
    height: 100,
    backgroundColor: '#c43b3d',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    margin: 10,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 10,
  },
  honoryCardText: {
    color: '#fff',
    fontSize: 18,
  },
  tempButton: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 2,
    borderRadius: 7,
  },
});

export default UserProfilePanel;
