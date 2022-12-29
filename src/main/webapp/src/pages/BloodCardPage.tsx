import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    donationType: 'Krew pełna',
    donationAmount: '1000 ml',
    donationDate: '05.12.22',
    cardColor: '#b92d2d',
  },
  {
    donationType: 'Osocze',
    donationAmount: '550 ml',
    donationDate: '05.12.22',
    cardColor: '#bcbc3a',
  },
  {
    donationType: 'Płytki krwi',
    donationAmount: '200 ml',
    donationDate: '05.12.22',
    cardColor: '#3e7839',
  },
  {
    donationType: 'Krwinki czerwone',
    donationAmount: '500 ml',
    donationDate: '05.12.22',
    cardColor: '#4a86b6',
  },
  {
    donationType: 'Krwinki białe',
    donationAmount: '100 ml',
    donationDate: '05.12.22',
    cardColor: '#5b2c39',
  },
  {
    donationType: 'Krwinki białe i czerwone',
    donationAmount: '100 ml',
    donationDate: '05.12.22',
    cardColor: '#27315e',
  },
];

import BloodCard from '../components/BloodCard';

const BloodCardPanel = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text1}> Twoja ostatnia donacja </Text>
        <Text style={styles.text1}> Piątek, 04.11.2022 </Text>
        <View style={styles.info}>
          <Text style={styles.text2}> Krew pełna </Text>
          <Text style={styles.text2}> Ilość: 500 ml </Text>
          <View
            style={{
              borderBottomColor: '#000000',
              borderBottomWidth: 4,
            }}
          />
          <Text style={styles.text3}>
            <MaterialCommunityIcons
              name={'account'}
              size={20}
              color="#000000"
            />
            Regionalne Centrum Krwiodawstwa i Krwiolecznictwa Łódź{' '}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <FlatList
        key={4}
        data={data}
        style={styles.cards}
        renderItem={BloodCard}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    marginTop: 20,
    backgroundColor: '#d4d4d4',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  info: {
    marginTop: 5,
    backgroundColor: '#d4d4d4',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },
  cards: {
    flex: 1,
  },
  text1: {
    color: '#202020',
    fontSize: 17,
  },
  text2: {
    color: '#202020',
    fontSize: 24,
  },
  text3: {color: '#202020', fontSize: 13},
});

export default BloodCardPanel;
