import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import DiscountCard from '../components/DiscountCard';
import DiscountModalItem from '../components/DiscountModalItem';

const data = [
  {
    title: 'Mikołajkowe gadzety dla krwiodawstwa',
    description:
      'Zdobadz gadżety mikołajkowe pod choinkę oddając krew do końca roku na terenie Łodzi.',
    status: true,
    uri: require('../../assets/images/gadgets.png'),
  },
  {
    title: 'Znizka na transport publiczny w okresie swiatecznym',
    description: 'Opis znizki',
    status: false,
    uri: require('../../assets/images/transport.png'),
  },
  {
    title: 'Apteka',
    description: 'Aktywne do: 21.01.2023',
    status: true,
    uri: require('../../assets/images/pharmacy.png'),
  },
];

const DiscountPanel = () => {
  const [discountsList, setDiscountsList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [responseError, setResponseError] = React.useState(false);

  React.useEffect(() => {
    getDiscounts();
  }, []);

  const getDiscounts = async () => {
    setIsLoading(true);

    try {
      const response = await axios(`http://10.0.2.2:8082/api/discounts/all`, {
        timeout: 5000,
        method: 'GET',
      });

      setDiscountsList(response.data);
      //console.log('response: ' + response.data);
      setIsLoading(false);
      setResponseError(false);
    } catch (error) {
      console.log('fetch error - ' + error);
      setIsLoading(false);
      setResponseError(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View></View>
      {/* {data.map((itemK, key) => {
        return (
          <View key={key}>
            <DiscountCard item={itemK} />
          </View>
        );
      })} */}
      {isLoading ? (
        <View style={{margin: 20}}>
          <ActivityIndicator size="large" color="#c43b3d" />
        </View>
      ) : responseError ? (
        <View>
          <Text style={{margin: 10, color: '#c43b3d'}}>
            Brak połączenia internetowego do zaktualizowania zniżek
          </Text>
        </View>
      ) : (
        <View style={{marginBottom: 10, height: '100%'}}>
          <ScrollView nestedScrollEnabled={true}>
            {discountsList.map((itemK, key) => {
              return (
                <View key={key}>
                  <DiscountCard item={itemK} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
});

export default DiscountPanel;
