import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BloodCard from '../components/BloodCard';

const data = [
  {
    donationType: 'Krew pełna',
    donationAmount: '- ml',
    donationDate: '28.01.23',
    cardColor: '#c43b3d',
  },
  {
    donationType: 'Osocze',
    donationAmount: '- ml',
    donationDate: '14.01.23',
    cardColor: '#ff9100',
  },
  {
    donationType: 'Płytki krwi',
    donationAmount: '- ml',
    donationDate: '28.01.23',
    cardColor: '#2fa524',
  },
  {
    donationType: 'Krwinki czerwone',
    donationAmount: '- ml',
    donationDate: '28.01.23',
    cardColor: '#3791da',
  },
  {
    donationType: 'Krwinki białe',
    donationAmount: '- ml',
    donationDate: '28.01.23',
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
  date: '02.12.2022',
  donationType: 'Krew pełna',
  donationAmount: '450',
};

const BloodCardPanel = ({navigation}: {navigation: any}) => {
  const [lastDonation, setLastDonation] = React.useState([]);
  const [bloodData, setBloodData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [responseError, setResponseError] = React.useState(false);

  React.useEffect(() => {
    getUserDonations();
  }, []);

  const getUserDonations = async () => {
    setIsLoading(true);

    try {
      // const response = await axios(`http://10.0.2.2:8082/api/news/all`, {
      //   timeout: 5000,
      //   method: 'GET',
      // });

      //setNews(response.data);
      //console.log('response: ' + response);
      setIsLoading(false);
      setResponseError(false);
    } catch (error) {
      console.log('fetch error - ' + error);
      setIsLoading(false);
      setResponseError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.vadenecumButton}>
        <TouchableOpacity
          style={styles.vadenecumButton}
          onPress={() => navigation.navigate('VadenecumPage')}>
          <Text style={{color: '#fff', fontSize: 14}}>
            {' '}
            Kompendium wiedzy dawcy krwi{' '}
          </Text>
          <Icon name="keyboard-arrow-right" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
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
      <FlatList key={4} data={data} renderItem={BloodCard} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  donationCard: {
    backgroundColor: '#ffffff',
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
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
  vadenecumButton: {
    backgroundColor: '#fc4a4d',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    height: 40,
    margin: 5,
  },
});

export default BloodCardPanel;
