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
import BloodCard from '../components/BloodCard';

const data = [
  {
    donationType: 'Krew pełna',
    donationAmount: '1000 ml',
    donationDate: '05.12.22',
    cardColor: '#c43b3d',
  },
  {
    donationType: 'Osocze',
    donationAmount: '550 ml',
    donationDate: '05.12.22',
    cardColor: '#ff9100',
  },
  {
    donationType: 'Płytki krwi',
    donationAmount: '200 ml',
    donationDate: '05.12.22',
    cardColor: '#2fa524',
  },
  {
    donationType: 'Krwinki czerwone',
    donationAmount: '500 ml',
    donationDate: '05.12.22',
    cardColor: '#3791da',
  },
  {
    donationType: 'Krwinki białe',
    donationAmount: '100 ml',
    donationDate: '05.12.22',
    cardColor: '#dbdd4b',
  },
  {
    donationType: 'Cos tam',
    donationAmount: '100 ml',
    donationDate: '05.12.22',
    cardColor: '#ac39da',
  },
];

interface LastDonation {
  date: string;
  donationType: string;
  donationAmount: string;
}

const donationData: LastDonation = {
  date: '04.11.2022',
  donationType: 'Krew pełna',
  donationAmount: '500',
};

const BloodCardPanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.donationCard}>
        <Text style={{fontSize: 17, color: '#000'}}>
          Twoja ostatnia donacja
        </Text>
        <Text style={{color: '#6d6d6d'}}> Data: {donationData.date} </Text>
        <View style={styles.info}>
          <Text style={{color: '#000000', fontSize: 22}}>
            {' '}
            {donationData.donationType}{' '}
          </Text>
          <Text style={{color: '#000000', fontSize: 40, marginBottom: 5}}>
            {donationData.donationAmount} ml
          </Text>
          <Text style={{color: '#000000', fontSize: 13}}>
            <MaterialCommunityIcons
              name={'google-maps'}
              size={20}
              color="#585858"
            />
            Regionalne Centrum Krwiodactwa i Krwiolecznictwa Łódź
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
        //style={styles.cards}
        renderItem={BloodCard}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  donationCard: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    elevation: 7,
  },
  info: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },
  cards: {
    flex: 1,
  },
});

export default BloodCardPanel;
